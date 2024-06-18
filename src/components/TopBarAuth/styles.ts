import { lightTheme } from "@mobile/theme";
import { fonts, latoTypography, poppinsTypography } from "@mobile/utils/typograph";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    title: {
      fontSize: fonts.fontSizeMediumSmall.fontSize,
      textAlign: 'center',
      fontWeight: latoTypography.fontWeightBold.fontWeight
    },
    stepCount: {
      fontSize: fonts.fontSizeMediumLSmall.fontSize,
      fontFamily: poppinsTypography.fontFamilyRegular.fontFamily,
      color: lightTheme.colors.textDefault
    },
  });