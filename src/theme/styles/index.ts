import { lightTheme } from "@mobile/theme";
import { latoTypography, fonts, poppinsTypography } from "@mobile/utils/typograph";

export const backgroundStyle = {
    gradient1: lightTheme.colors.gradientBackgroundColorOne,
    gradient2: lightTheme.colors.gradientBackgroundColorTwo,
};

export const boldText = {
    color: lightTheme.colors.textBold,
    fontFamily: latoTypography.fontFamilyBold.fontFamily,
    fontSize: fonts.fontSizeMediumSmall.fontSize,
    fontWeight: poppinsTypography.fontFamilyBold.fontFamily,
    lineHeight: 14,
};

export const textSimple = {
    fontSize: fonts.fontSizeMediumLSmall.fontSize,
    fontWeight: poppinsTypography.fontWeightRegular.fontWeight,
    fontFamily: poppinsTypography.fontFamilyRegular.fontFamily,
    lineHeight: 16,
};