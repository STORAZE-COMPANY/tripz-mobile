import { StyleSheet } from 'react-native';

const fonts = {
    fontSizeSmall: {
        fontSize: 10,
    },
    fontSizeMediumLSmall: {
        fontSize: 12,
    },
    fontSizeMediumSmall: {
        fontSize: 14,
    },
    fontSizeMedium: {
        fontSize: 16,
    },
    fontSizeLarge: {
        fontSize: 20,
    },
    fontSizeXLarge: {
        fontSize: 24,
    },
    fontSizeXXLarge: {
        fontSize: 32
    },
    fontSizeXXXLarge: {
        fontSize: 36
    },

    fontSizeXXXLarger: {
        fontSize: 40
    },
}

const latoTypography = StyleSheet.create({

    fontFamilyRegular: {
        fontFamily: 'Lato_400Regular',
    },
    fontFamilyBold: {
        fontFamily: 'Lato_700Bold',
    },

    fontWeightLight: {
        fontWeight: '300',
    },
    fontWeightNormal: {
        fontWeight: '400',
    },
    fontWeightSemiBold: {
        fontWeight: '500'
    },
    fontWeightBold: {
        fontWeight: '700',
    },

    lineHeightTight: {
        lineHeight: 1.2,
    },
    lineHeightNormal: {
        lineHeight: 1.5,
    },
    lineHeightLoose: {
        lineHeight: 1.8,
    },

    bodyText: {
        fontFamily: 'Lato_400Regular',
        fontSize: 16,
        lineHeight: 1.5,
    },
    heading: {
        fontFamily: 'Lato_700Bold',
        fontSize: 24,
        lineHeight: 1.5,
    },
    subheading: {
        fontFamily: 'Lato_400Regular',
        fontSize: 20,
        lineHeight: 1.5,
    }
});

const poppinsTypography = StyleSheet.create({
   
    fontFamilyLight: {
        fontFamily: 'Poppins_300Light',
    },
    fontFamilyRegular: {
        fontFamily: 'Poppins_400Regular',
    },
    fontFamilyMedium: {
        fontFamily: 'Poppins_500Medium'
    },
    fontFamilyBold: {
        fontFamily: 'Poppins_600SemiBold',
    },
    fontWeightLight: {
        fontWeight: '300',
    },
    fontWeightRegular: {
        fontWeight: '400',
    },
    fontWeightSemiBold: {
        fontWeight: '500'
    },
    fontWeightBold: {
        fontWeight: '700',
    },

    lineHeightTight: {
        lineHeight: 1.2,
    },
    lineHeightNormal: {
        lineHeight: 16,
    },
    lineHeightLoose: {
        lineHeight: 1.8,
    },

    bodyText: {
        fontFamily: 'Lato_400Regular',
        fontSize: 16,
        lineHeight: 1.5,
    },
    heading: {
        fontFamily: 'Lato_700Bold',
        fontSize: 24,
        lineHeight: 1.5,
    },
    subheading: {
        fontFamily: 'Lato_400Regular',
        fontSize: 20,
        lineHeight: 1.5,
    }
});


export { fonts, latoTypography, poppinsTypography };
