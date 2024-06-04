import { fontBold, fontRegular } from "@mobile/typograph/typograph";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subtitle: { 
        marginBottom: 31,
        textAlign: 'center',
        fontFamily: fontRegular.fontFamily,
        fontSize: fontRegular.fontSize.large,  
        fontWeight:'500'
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
       fontFamily: fontBold.fontFamily,
       fontSize: fontBold.fontSize.small,
        textAlign: 'center',
        marginTop: 15,

    },
    button: {

    }
});
