import { typography } from "@mobile/utils/typograph";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: 'white',
    },
    title: {
        fontSize: typography.fontSizeXLarge.fontSize,
        fontWeight: 'bold',
        marginBottom: typography.fontSizeLarge.fontSize,
    },
    subtitle: {
        marginBottom: 31,
        textAlign: 'center',
        fontFamily: typography.fontFamilyRegular.fontFamily,
        fontSize: typography.fontSizeXXLarger.fontSize,
        fontWeight: typography.fontWeightSemiBold.fontWeight
    },
    googleButton: {
        marginBottom: 16,

    },
    buttonInner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    appleButton: {

    },
    buttonEmail: {
        color: '#2F419E',
        fontFamily: typography.fontFamilyBold.fontFamily,
        fontSize: typography.fontSizeSmall.fontSize,
        textAlign: 'center',
        marginTop: 15,

    },
    button: {

    }
});
