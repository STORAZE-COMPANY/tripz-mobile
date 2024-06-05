import { typography } from "@mobile/utils/typograph";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        bottom: 10,
       
    },
    text: {
        fontSize: 44,
        fontWeight: typography.fontWeightBold.fontWeight,
        marginTop: 20,
        textAlign: 'center',
        paddingHorizontal: 28,
    },
    subtitle: {
        fontSize: typography.fontSizeMedium.fontSize,
        marginTop: 10,
        textAlign: 'center',
        color: '#555',
     
    },
    subtitleRemember: {
        fontSize:  typography.fontSizeMedium.fontSize,
        marginTop: 10,
        color: '#553',
        fontWeight: typography.fontWeightBold.fontWeight,
        textAlign: 'center',
        
    },
    textRemember: {
        fontSize: typography.fontSizeMedium.fontSize,
        marginTop: 10,
        textAlign: 'center',
        color: '#555',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: '100%',
    },
    skipButton: {
        color: '#2F419E',
        fontSize: typography.fontSizeMedium.fontSize,
    },
    nextButton: {
        backgroundColor: '#2F419E',
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
        backgroundColor: '#2F419E',
    },
    inactiveIndicator: {
        backgroundColor: 'gray',
    },
    locationButton: {
        marginTop: 20,
        backgroundColor: '#2F419E',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        width: 200,
       
    },
    locationButtonText: {
        color: 'white',
        fontSize: typography.fontSizeMedium.fontSize,
    },
    disabledText: {
        color: 'gray',
    },
    disabledNextButton: {
        backgroundColor: 'gray',
    }
});