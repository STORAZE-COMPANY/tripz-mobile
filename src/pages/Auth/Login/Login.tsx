import React from "react";
import { t } from "i18next";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ButtonMail, LoginTitle } from "./styles";

import { scale } from "@mobile/utils/resize";
import { Box } from "@mobile/components/Box";
import { Background } from "@mobile/components/Background";

import GoogleSvg from "@mobile/assets/google.svg";
import AppleSvg from "@mobile/assets/apple.svg";
import LogoSVG from "@mobile/assets/logoOn.svg";

import { backgroundStyle } from "@mobile/theme/styles";

export function Login() {
  const navigation = useNavigation();

  const toRegister = () => {
    navigation.navigate("StepEmail");
  };

  return (
    <Background {...backgroundStyle}>
      <Box top={45}>
        <LogoSVG width={scale(98.59)} height={scale(21)} />
      </Box>

      <Box justifyContent="flex-end" alignItems="center" flex={2} bottom={60}>
        <Box bottom={20} pdHorizontal={20}>
          <Text style={LoginTitle}>{t("PAGES.AUTH.LOGIN.TITLE")}</Text>
        </Box>
        <Box marginBottom={7} alignItems="center">
          <TouchableOpacity onPress={() => {}}>
            <GoogleSvg />
          </TouchableOpacity>
        </Box>
        <Box>
          <TouchableOpacity onPress={() => {}}>
            <AppleSvg />
          </TouchableOpacity>
        </Box>
        <TouchableOpacity onPress={toRegister}>
          <Text style={ButtonMail}>{t("PAGES.AUTH.LOGIN.EMAIL")}</Text>
        </TouchableOpacity>
      </Box>
    </Background>
  );
}
