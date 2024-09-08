import React, { useEffect, useState } from "react";
import { Alert, KeyboardAvoidingView, Platform, Text } from "react-native";
import { Background } from "@mobile/components/Background";
import { Box } from "@mobile/components/Box";
import { ButtonDefault } from "@mobile/components/ButtonDefault";
import { Input } from "@mobile/components/Input";
import { TopBarComponent } from "@mobile/components/TopBarAuth";
import { lightTheme } from "@mobile/theme";
import { useNavigation, useRoute } from "@react-navigation/native";
import { t } from "i18next";
import {
  fonts,
  latoTypography,
  poppinsTypography,
} from "@mobile/utils/typograph";
import { validateToken } from "@mobile/services/UserService";
import { scale } from "@mobile/utils/resize";

const StepCode: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [countdown, setCountdown] = useState(59);

  // Recebe o email passado como parâmetro de navegação
  useEffect(() => {
    if (route.params && route.params.email) {
      setEmail(route.params.email);
    }
  }, [route.params]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000); // Diminui o contador a cada segundo
      return () => clearTimeout(timer); // Limpa o timer ao desmontar o componente
    }
  }, [countdown]);

  const handleNextStep = async () => {
    try {
      const isValid = await validateToken({ token: code, email });
      if (isValid) {
        navigation.navigate("StepSetPassword", { email });
      } else {
        Alert.alert("Erro", "Código inválido. Por favor, tente novamente.");
      }
    } catch (error) {
      // Verifica se o erro é causado por token inválido
      if (error.response?.data?.message.includes("Token inválido")) {
        Alert.alert(
          "Erro",
          "Código inválido. Por favor, verifique o código e tente novamente."
        );
      } else {
        Alert.alert(
          "Erro",
          "Ocorreu um erro ao validar o código. Por favor, tente novamente."
        );
      }
    }
  };

  const backgroundStyle = {
    gradient1: lightTheme.colors.gradientBackgroundColorOne,
    gradient2: lightTheme.colors.gradientBackgroundColorTwo,
  };

  const boldText = {
    color: lightTheme.colors.textBold,
    fontFamily: latoTypography.fontFamilyBold.fontFamily,
    fontSize: fonts.fontSizeMediumSmall.fontSize,
    fontWeight: poppinsTypography.fontFamilyBold.fontFamily,
    lineHeight: 14,
  };

  const textSimple = {
    fontSize: fonts.fontSizeMediumLSmall.fontSize,
    fontWeight: poppinsTypography.fontWeightRegular.fontWeight,
    fontFamily: poppinsTypography.fontFamilyRegular.fontFamily,
    lineHeight: 16,
  };

  const isButtonDisabled = !code.trim();

  return (
    <Background {...backgroundStyle}>
      <Box>
        <Box>
          <TopBarComponent
            titleText={t("PAGES.AUTH.REGISTER.TITLETOP3")}
            currentStep={2}
            totalSteps={4}
          />
        </Box>

        <Box alignItems="center">
          <Box pdHorizontal={12} right={12} pdVertical={20}>
            <Text>{t("PAGES.AUTH.REGISTER.TEXTCODE.TEXT")}</Text>
            <Text style={{ color: lightTheme.colors.primary, top: scale(5) }}>
              {email}
            </Text>
          </Box>
          <Box flex={1} alignItems="center" pdTop={20}>
            <Input
              type="code"
              placeholder={t("PAGES.AUTH.REGISTER.PLACEHOLDERPASSWORD")}
              value={code}
              onChangeText={setCode}
            />
          </Box>
          <Box flex={6} alignItems="center">
            <Box right={16} bottom={20}>
              <Box flexDirection="row" alignItems="center">
                <Text style={boldText}>
                  {t("PAGES.AUTH.REGISTER.TEXTCODE.TEXTIMPORTANT.ONE")}{" "}
                </Text>
                <Text style={textSimple}>
                  {t("PAGES.AUTH.REGISTER.TEXTCODE.TEXTIMPORTANT.TWO")}{" "}
                </Text>
                <Text style={boldText}>
                  {t("PAGES.AUTH.REGISTER.TEXTCODE.TEXTIMPORTANT.THREE")}{" "}
                </Text>
                <Text style={textSimple}>
                  {t("PAGES.AUTH.REGISTER.TEXTCODE.TEXTIMPORTANT.FOUR")}{" "}
                </Text>
              </Box>
              <Box flexDirection="row" alignItems="center">
                <Text style={boldText}>
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
              bottom={10}
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

          <Box flex={2} alignItems="center" bottom={60}>
            <ButtonDefault
              width={330}
              height={40}
              borderRadius={8}
              disabled={isButtonDisabled}
              text={t("PAGES.AUTH.REGISTER.TEXTCODE.BUTTON.CONFIRM")}
              color={lightTheme.colors.secondary}
              onPress={handleNextStep}
            />
          </Box>
        </Box>
      </Box>
    </Background>
  );
};

export { StepCode };
