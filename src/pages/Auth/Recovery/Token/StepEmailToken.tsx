import { t } from "i18next";
import { Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Box } from "@mobile/components/Box";
import { Input } from "@mobile/components/Input";
import { Background } from "@mobile/components/Background";
import { TopBarComponent } from "@mobile/components/TopBarAuth";
import { ButtonDefault } from "@mobile/components/ButtonDefault";

import { lightTheme } from "@mobile/theme";
import { scale } from "@mobile/utils/resize";
import { isEmailValid } from "@mobile/utils/validateEmail";
import { backgroundStyle, boldText, textSimple } from "@mobile/theme/styles";

export function StepEmailToken() {
  const navigation = useNavigation();
  const route = useRoute();
  const [isButtonDisabled, setDisabled] = useState(true);
  const [code, setCode] = useState("");
  const [countdown, setCountdown] = useState(59);

  const { email: routeEmail } = route.params as { email: string };
  const [email, setEmail] = useState(routeEmail || "");

  const handleNextStep = async () => {
    if (!isEmailValid(email)) {
      return;
    }

    navigation.navigate("StepNewPassword", { email });
  };

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
    setDisabled(!isEmailValid(email));
  }, [countdown, email]);

  return (
    <Background {...backgroundStyle}>
      <Box>
        <Box>
          <TopBarComponent
            titleText={t("PAGES.AUTH.REGISTER.TITLETOP4")}
            currentStep={2}
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
            <Box top={20}>
              <Box pdHorizontal={12} right={12}>
                <Text>{t("PAGES.AUTH.REGISTER.TEXTCODE.TEXT")}</Text>
                <Text
                  style={{ color: lightTheme.colors.primary, top: scale(5) }}
                >
                  {email}
                </Text>
              </Box>
              <Box top={40}>
                <Input
                  type="code"
                  placeholder={t("PAGES.AUTH.REGISTER.PLACEHOLDERPASSWORD")}
                  value={code}
                  onChangeText={setCode}
                />
              </Box>
              <Box flex={6} alignItems="center" top={45}>
                <Box right={16}>
                  <Box flexDirection="row" alignItems="center">
                    <Text style={{ ...boldText, fontWeight: "bold" }}>
                      {t("PAGES.AUTH.REGISTER.TEXTCODE.TEXTIMPORTANT.ONE")}{" "}
                    </Text>
                    <Text style={textSimple}>
                      {t("PAGES.AUTH.REGISTER.TEXTCODE.TEXTIMPORTANT.TWO")}{" "}
                    </Text>
                    <Text style={{ ...boldText, fontWeight: "bold" }}>
                      {t("PAGES.AUTH.REGISTER.TEXTCODE.TEXTIMPORTANT.THREE")}{" "}
                    </Text>
                    <Text style={textSimple}>
                      {t("PAGES.AUTH.REGISTER.TEXTCODE.TEXTIMPORTANT.FOUR")}{" "}
                    </Text>
                  </Box>
                  <Box flexDirection="row" alignItems="center">
                    <Text style={{ ...boldText, fontWeight: "bold" }}>
                      {t("PAGES.AUTH.REGISTER.TEXTCODE.TEXTIMPORTANT.FIVE")}{" "}
                    </Text>
                    <Text style={textSimple}>
                      {t("PAGES.AUTH.REGISTER.TEXTCODE.TEXTIMPORTANT.SIX")}{" "}
                    </Text>
                  </Box>
                </Box>
                <Box
                  alignItems="center"
                  flexDirection="row"
                  top={15}
                  justifyContent="center"
                >
                  <Text style={textSimple}>
                    {t("PAGES.AUTH.REGISTER.TEXTCODE.TEXTIMPORTANT.SEVEN")}{" "}
                  </Text>
                  <Text style={{ fontWeight: "bold" }}>
                    00:{countdown < 10 ? `0${countdown}` : countdown}s
                  </Text>
                </Box>
              </Box>
            </Box>
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

// try {
// Valida o token de redefinição de senha usando a função criada
//   const isValid = await validatePasswordResetToken(code);

//   if (isValid) {
// Se o token for válido, navega para a tela de criação de nova senha
//   } else {
//     Alert.alert(
//       "Erro",
//       "Token inválido. Por favor, verifique o código enviado para o seu e-mail."
//     );
//   }
// } catch (error) {
//   Alert.alert(t("PAGES.AUTH.REGISTER.ALERTS.ERROR.ERRO"));
// }
