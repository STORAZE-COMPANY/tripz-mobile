import { lightTheme } from "@mobile/theme";
import { fonts, latoTypography } from "@mobile/utils/typograph";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontFamily: latoTypography.fontFamilyRegular.fontFamily,
        fontSize: fonts.fontSizeXXLarge.fontSize,
        fontWeight: 'semibold'

    },
    buttonEmail: {
        color: lightTheme.colors.primary,
        fontFamily: latoTypography.fontFamilyBold.fontFamily,
        fontSize: fonts.fontSizeMediumSmall.fontSize,
        textAlign: 'center',
    },
});
