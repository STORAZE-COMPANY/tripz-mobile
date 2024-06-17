import { lightTheme } from "@mobile/theme";
import { typography } from "@mobile/utils/typograph";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontFamily: typography.fontFamilyRegular.fontFamily,
        fontSize: typography.fontSizeXXLarge.fontSize,
        fontWeight: typography.fontWeightSemiBold.fontWeight

    },
    buttonEmail: {
        color: lightTheme.colors.primary,
        fontFamily: typography.fontFamilyBold.fontFamily,
        fontSize: typography.fontSizeSmall.fontSize,
        textAlign: 'center',
    },
});
