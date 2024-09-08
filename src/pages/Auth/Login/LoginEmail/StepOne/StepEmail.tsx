import { t } from "i18next";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { isEmailValid } from "@mobile/utils/validateEmail";

import { Box } from "@mobile/components/Box";
import { Input } from "@mobile/components/Input";
import { Background } from "@mobile/components/Background";
import { ButtonDefault } from "@mobile/components/ButtonDefault";
import { TopBarComponent } from "@mobile/components/TopBarAuth";
import { backgroundStyle } from "@mobile/theme/styles";

export function StepEmail() {
  const navigation = useNavigation();
  const [disabled, setDisabled] = useState(true);
  const [localEmail, setLocalEmail] = useState("");

  function navigateToStepPassword() {
    if (!isEmailValid(localEmail)) {
      return;
    }
    navigation.navigate("StepPassword");
  }

  useEffect(() => {
    setDisabled(!isEmailValid(localEmail));
  }, [localEmail]);

  return (
    <Background {...backgroundStyle}>
      <Box>
        <Box>
          <TopBarComponent
            titleText={t("PAGES.AUTH.REGISTER.TITLETOP")}
            currentStep={1}
            totalSteps={4}
          />
        </Box>
        <Box alignItems="center">
          <Box flex={1} alignItems="center" pdTop={30} width={330}>
            <Input
              width={280}
              placeholder={t("PAGES.AUTH.REGISTER.EMAIL")}
              label={t("PAGES.AUTH.REGISTER.TEXTEMAIL")}
              value={localEmail}
              onChangeText={setLocalEmail}
            />
          </Box>
          <Box flex={1} top={170}>
            <ButtonDefault
              width={330}
              height={40}
              borderRadius={8}
              text={t("PAGES.AUTH.REGISTER.BUTTON.NEXT")}
              onPress={navigateToStepPassword}
              disabled={disabled}
            />
          </Box>
        </Box>
      </Box>
    </Background>
  );
}

// import { getUserByEmail, sendTokenToEmail } from "@mobile/services/UserService";
// const [email, setEmail] = useState("");console.log("Email:", email);
// console.log("LocalEmail:", localEmail);

// const handleNextStep = async () => {
// if (!localEmail.trim()) {
// Alert.alert(t("PAGES.AUTH.REGISTER.ALERTS.ERROR.EMAILNULL"));
// return;
// }

//     if (!isValidEmail(localEmail)) {
//       Alert.alert("Erro", "Por favor, insira um e-mail válido!");
//       return;
//     }

//     try {
//       const userEmail = await getUserByEmail(localEmail);
//       if (userEmail) {
//         setEmail(localEmail); // Armazena o email no contexto
//         navigation.navigate("StepPassword");
//       } else {
//         throw new Error("Usuário não encontrado");
//       }
//     } catch (error) {
//       if (error.message === "Usuário não encontrado") {
//         try {
//           await sendTokenToEmail(localEmail);
//           navigation.navigate("StepCode", { email: localEmail });
//         } catch (sendError) {
//           Alert.alert(
//             t("PAGES.AUTH.REGISTER.ALERTS.ERROR.SENDTOKENFAIL"),
//             sendError.message
//           );
//         }
//       } else {
//         Alert.alert(
//           t("PAGES.AUTH.REGISTER.ALERTS.ERROR.USERSEARCHFAIL"),
//           error.message
//         );
//       }
//     }

// };
