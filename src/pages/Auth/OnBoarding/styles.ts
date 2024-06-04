import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    text: {
        fontSize: 44,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',
        paddingHorizontal: 28,
    },
    subtitle: {
        fontSize: 16,
        marginTop: 10,
        textAlign: 'center',
        color: '#555',
        paddingHorizontal: 20,
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
        fontSize: 16,
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
    },
    locationButtonText: {
        color: 'white',
        fontSize: 16,
    },
    disabledText: {
        color: 'gray',
    },
    disabledNextButton: {
        backgroundColor: 'gray',
    },
});