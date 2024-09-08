import React, { useEffect, useState } from "react";
import { Alert, Text } from "react-native";
import { Background } from "@mobile/components/Background";
import { Box } from "@mobile/components/Box";
import { ButtonDefault } from "@mobile/components/ButtonDefault";
import { Input } from "@mobile/components/Input";
import { TopBarComponent } from "@mobile/components/TopBarAuth";
import { lightTheme } from "@mobile/theme";
import { useNavigation, useRoute } from "@react-navigation/native";
import { t } from "i18next";
import { poppinsTypography } from "@mobile/utils/typograph";
import { scale } from "@mobile/utils/resize";
import axios from "axios";
import { backgroundStyle } from "@mobile/theme/styles";
import { isEmailValid } from "@mobile/utils/validateEmail";
import { textBold, textSimple2 } from "./styles";

export function StepNewPassword() {
  const route = useRoute();
  const navigation = useNavigation();
  const { email } = route.params as { email: string };

  const [password, setPassword] = useState("");
  const [isButtonDisabled, setDisabled] = useState(true);

  const handleNextStep = async () => {
    if (!password) {
      Alert.alert(t("PAGES.AUTH.REGISTER.ALERTS.ERROR.PASSWORDNULL"));
      return;
    }

    // try {
    //   // Enviando a solicitação POST para o endpoint de atualização de senha
    //   const response = await axios.post(
    //     "http://localhost:8080/auth/updatePassWordUser",
    //     {
    //       email: email.trim(),
    //       password: password.trim(),
    //     }
    //   );

    //   // Verifica se a resposta é bem-sucedida (status 200)
    //   if (response.status === 200) {
    //     navigation.navigate("StepEmail", { email, password });
    //   } else {
    //     Alert.alert(t("PAGES.AUTH.REGISTER.ALERTS.ERROR.ERRO"));
    //   }
    // } catch (error) {
    //   console.error(
    //     "Erro ao atualizar a senha:",
    //     error.response?.data || error.message
    //   );
    //   Alert.alert(t("PAGES.AUTH.REGISTER.ALERTS.ERROR.ERRO"));
    // }
  };

  useEffect(() => {
    setDisabled(!isEmailValid(email));
  }, [email]);

  return (
    <Background {...backgroundStyle}>
      <Box>
        <Box width={343}>
          <TopBarComponent
            titleText={t("PAGES.AUTH.REGISTER.TEXTPASSWORD.TITLETOP2")}
            currentStep={3}
            totalSteps={3}
          />
        </Box>

        <Box alignItems="center" pdTop={30} flex={1}>
          <Input
            type="password"
            strengthBars
            width={scale(230)}
            label="Crie uma senha"
            placeholder={t("PAGES.AUTH.REGISTER.PLACEHOLDERPASSWORD")}
            onChangeText={setPassword}
          />
        </Box>
        <Box flex={6} pdHorizontal={14} pdVertical={15}>
          <Box flexDirection="row" alignItems="center" marginBottom={0.5}>
            <Text style={textBold}>
              {t("PAGES.AUTH.REGISTER.TEXTPASSWORD.TEXT")}{" "}
            </Text>
            <Text>{t("PAGES.AUTH.REGISTER.TEXTPASSWORD.TEXT2")}</Text>
          </Box>
          <Box left={8} top={2}>
            <Text style={textSimple2}>
              {t("PAGES.AUTH.REGISTER.TEXTPASSWORD.TEXT3")}{" "}
            </Text>
            <Text style={textSimple2}>
              {t("PAGES.AUTH.REGISTER.TEXTPASSWORD.TEXT4")}{" "}
            </Text>
            <Text style={textSimple2}>
              {t("PAGES.AUTH.REGISTER.TEXTPASSWORD.TEXT5")}{" "}
            </Text>
            <Text style={textSimple2}>
              {t("PAGES.AUTH.REGISTER.TEXTPASSWORD.TEXT6")}{" "}
            </Text>
            <Text style={textSimple2}>
              {t("PAGES.AUTH.REGISTER.TEXTPASSWORD.TEXT7")}{" "}
            </Text>
          </Box>
        </Box>
        <Box
          alignItems="center"
          flex={5}
          top={300}
          position="absolute"
          justifyContent="center"
          left={12}
        >
          <Input
            type="password"
            width={scale(230)}
            label="Repita a senha"
            placeholder={t("PAGES.AUTH.REGISTER.PLACEHOLDERPASSWORD")}
            onChangeText={setPassword}
          />
        </Box>
        <Box alignItems="center" bottom={45}>
          <ButtonDefault
            width={330}
            height={40}
            borderRadius={8}
            disabled={isButtonDisabled}
            text={t("PAGES.AUTH.REGISTER.TEXTPASSWORD.BUTTON.CONFIRM")}
            color={lightTheme.colors.secondary}
            onPress={handleNextStep}
          />
        </Box>
      </Box>
    </Background>
  );
}
