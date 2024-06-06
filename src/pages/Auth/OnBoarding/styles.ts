import { lightTheme } from "@mobile/theme";
import { typography } from "@mobile/utils/typograph";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    text: {
        fontSize: typography.fontSizeXXXLarger.fontSize,
        fontWeight: typography.fontWeightBold.fontWeight,
        textAlign: 'center',
   
    },
    subtitle: {
        fontSize: typography.fontSizeMedium.fontSize,
        textAlign: 'center',
        color: lightTheme.colors.textColorOnboarding,
     
    },
    subtitleRemember: {
        fontSize:  typography.fontSizeMedium.fontSize,
        color: lightTheme.colors.textColorOnboarding,
        fontWeight: typography.fontWeightBold.fontWeight,
        textAlign: 'center',
        
    },
    textRemember: {
        fontSize: typography.fontSizeMedium.fontSize,
        textAlign: 'center',
        color: lightTheme.colors.textColorOnboarding,

    },
    textRemember2: {
        fontSize: typography.fontSizeMedium.fontSize,
        textAlign: 'center',
        color: lightTheme.colors.textColorOnboarding,
    },
    skipButton: {
        color: lightTheme.colors.primary,
        fontSize: typography.fontSizeMedium.fontSize,
        fontWeight: typography.fontWeightSemiBold.fontWeight,

    },
    nextButton: {
        backgroundColor: lightTheme.colors.primary,
        borderRadius: 10,
        padding: 10,
    },
    indicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    indicator: {
        width: 45,
        height: 2,
        borderRadius: 2,
        marginHorizontal: 5,
    },
    activeIndicator: {
        backgroundColor: lightTheme.colors.primary,
    },
    inactiveIndicator: {
        backgroundColor: lightTheme.colors.disableIndicator,
    },
    disabledText: {
        color: lightTheme.colors.disableColor,
    },
    disabledNextButton: {
        backgroundColor: lightTheme.colors.disableColor,
        
    }
});