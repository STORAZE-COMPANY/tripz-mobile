import { t } from "i18next";
import { Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { isEmailValid } from "@mobile/utils/validateEmail";
import { backgroundStyle } from "@mobile/theme/styles";

import { Box } from "@mobile/components/Box";
import { Input } from "@mobile/components/Input";
import { Background } from "@mobile/components/Background";
import { TopBarComponent } from "@mobile/components/TopBarAuth";
import { ButtonDefault } from "@mobile/components/ButtonDefault";

export function StepEmailPassword() {
  const navigation = useNavigation();
  const route = useRoute();

  const { email: routeEmail } = route.params as { email: string };
  const [email, setEmail] = useState(routeEmail || "");
  const [isButtonDisabled, setDisabled] = useState(true);

  const handleNextStep = async () => {
    if (!isEmailValid(email)) {
      Alert.alert("Erro", "Por favor, insira um e-mail válido!");
      return;
    }

    try {
      //   await sendTokenToPassword(email);
      navigation.navigate("StepEmailToken", { email });
    } catch (error) {
      console.error("Erro ao enviar o token de redefinição de senha:", error);
      Alert.alert(t("PAGES.AUTH.REGISTER.ALERTS.ERROR.ERRO"));
    }
  };

  useEffect(() => {
    setDisabled(!isEmailValid(email));
  }, [email]);

  return (
    <Background {...backgroundStyle}>
      <Box>
        <Box>
          <TopBarComponent
            titleText={t("PAGES.AUTH.REGISTER.TITLETOP4")}
            currentStep={1}
            totalSteps={3}
          />
        </Box>
        <Box alignItems="center">
          <Box flex={1} alignItems="center" pdTop={30} width={330}>
            <Input
              width={280}
              placeholder={t("PAGES.AUTH.REGISTER.EMAIL")}
              label={t("PAGES.AUTH.REGISTER.TEXTEMAIL")}
              value={email}
              onChangeText={setEmail}
            />
          </Box>
          <Box flex={1} top={170}>
            <ButtonDefault
              width={330}
              height={40}
              borderRadius={8}
              text={t("PAGES.AUTH.REGISTER.BUTTON.NEXT")}
              onPress={handleNextStep}
              disabled={isButtonDisabled}
            />
          </Box>
        </Box>
      </Box>
    </Background>
  );
}
