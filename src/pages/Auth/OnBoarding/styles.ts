import { lightTheme } from "@mobile/theme";
import { scale } from "@mobile/utils/resize";
import { fonts, latoTypography, poppinsTypography} from "@mobile/utils/typograph";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

    text: {
        fontSize: fonts.fontSizeXXXLarger.fontSize,
        textAlign: 'center',
        fontFamily: latoTypography.fontFamilyBold.fontFamily,
    },
    subtitle: {
        fontSize: fonts.fontSizeMediumLSmall.fontSize,
        fontFamily: poppinsTypography.fontFamilyRegular.fontFamily,
        textAlign: 'center',
        color: lightTheme.colors.textColorOnboarding,
        
     
    },
    subtitleRemember: {
        fontFamily: poppinsTypography.fontFamilyRegular.fontFamily,
        fontSize: fonts.fontSizeMediumLSmall.fontSize,
        color: lightTheme.colors.textColorOnboarding,
        fontWeight: poppinsTypography.fontWeightBold.fontWeight,
        textAlign: 'center',
        
    },
    textRemember: {
        fontSize: fonts.fontSizeMediumLSmall.fontSize,
        fontWeight: poppinsTypography.fontWeightRegular.fontWeight,
        fontFamily: poppinsTypography.fontFamilyRegular.fontFamily,
        textAlign: 'center',
        color: lightTheme.colors.textColorOnboarding,

    },
    textRemember2: {
        fontSize: fonts.fontSizeMediumLSmall.fontSize,
        fontWeight: poppinsTypography.fontWeightRegular.fontWeight,
        fontFamily: poppinsTypography.fontFamilyRegular.fontFamily,
        textAlign: 'center',
        color: lightTheme.colors.textColorOnboarding,
    },
    skipButton: {
        color: lightTheme.colors.primary,
        fontFamily: latoTypography.fontFamilyBold.fontFamily,
        fontSize: fonts.fontSizeMediumSmall.fontSize,

    },
    nextButton: {
        backgroundColor: lightTheme.colors.primary,
        borderRadius: scale(8),
        padding: 10,
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