import { typography } from "@mobile/utils/typograph";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    title: {
      fontSize: typography.fontSizeLarge.fontSize,
      textAlign: 'center',
      fontWeight: typography.fontWeightBold.fontWeight,
    },
    stepCount: {
      fontSize: typography.fontSizeMedium.fontSize,
      color:'grey'
    },
  });