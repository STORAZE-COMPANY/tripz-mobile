import { t } from "i18next";
import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { lightTheme } from "@mobile/theme";

import { Box } from "@mobile/components/Box";
import { Input } from "@mobile/components/Input";
import { Background } from "@mobile/components/Background";
import { ButtonDefault } from "@mobile/components/ButtonDefault";
import { TopBarComponent } from "@mobile/components/TopBarAuth";

export function StepPassword() {
  const navigation = useNavigation();
  const [password, setPassword] = useState("");

  function navigateToRecoveryPassword() {
    const email = "test@gmail.com";
    navigation.navigate("StepEmailPassword", { email });
  }

  function navigateToContent() {
    navigation.navigate("Content");
  }

  return (
    <Background
      gradient1={lightTheme.colors.gradientBackgroundColorOne}
      gradient2={lightTheme.colors.gradientBackgroundColorTwo}
    >
      <Box>
        <Box>
          <TopBarComponent
            titleText={t("PAGES.AUTH.REGISTER.TITLETOP2")}
            currentStep={2}
            totalSteps={2}
          />
        </Box>
        <Box flex={1} alignItems="center" pdTop={35}>
          <Input
            type="password"
            width={270}
            placeholder={t("PAGES.AUTH.REGISTER.PLACEHOLDERPASSWORD")}
            label={t("PAGES.AUTH.REGISTER.PASSWORD")}
            value={password}
            onChangeText={setPassword}
          />
          <Box
            width={320}
            justifyContent="flex-end"
            alignItems="flex-end"
            top={4}
          >
            <TouchableOpacity onPress={navigateToRecoveryPassword}>
              <Text style={{ color: lightTheme.colors.primary, fontSize: 10 }}>
                Esqueceu a senha?
              </Text>
            </TouchableOpacity>
          </Box>
        </Box>
        <Box alignItems="center" bottom={60}>
          <ButtonDefault
            width={300}
            height={40}
            borderRadius={8}
            text={t("PAGES.AUTH.REGISTER.BUTTON.LOGIN")}
            color={lightTheme.colors.secondary}
            onPress={navigateToContent}
          />
        </Box>
      </Box>
    </Background>
  );
}

// const { loginUser, email } = useAppContext();
// const handleNextStep = async () => {
//   if (!password) {
//     Alert.alert(
//       t("PAGES.AUTH.REGISTER.ALERTS.ERROR.ERRO"),
//       t("PAGES.AUTH.REGISTER.ALERTS.ERROR.PASSWORDNULL")
//     );
//     return;
//   }

//   try {
//     const success = await loginUser(email, password);

//     if (success) {
//       // Navega para a próxima página apenas se o login for bem-sucedido
//       navigation.navigate("Content");
//     } else {
//       Alert.alert(
//         t("PAGES.AUTH.REGISTER.ALERTS.ERROR.ERRO"),
//         t("PAGES.AUTH.REGISTER.ALERTS.ERROR.INVALIDCREDENTIALS")
//       );
//     }
//   } catch (error) {
//     console.error("Erro ao fazer login:", error);
//     Alert.alert(
//       t("PAGES.AUTH.REGISTER.ALERTS.ERROR.ERRO"),
//       error.message || t("PAGES.AUTH.REGISTER.ALERTS.ERROR.ERRO")
//     );
//   }
// };
