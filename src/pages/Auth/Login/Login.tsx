import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import appleAuth, { AppleButton } from '@invertase/react-native-apple-authentication';
import Box from '../../../components/Box/Box';
import Background from '../../../components/Background/Background';
import GoogleSvg from '../../../../assets/google.svg'; // Substitua pelo caminho do seu arquivo SVG
import AppleSvg from '../../../../assets/apple.svg'; // Substitua pelo caminho do seu arquivo SVG
import LogoSVG from '../../../../assets/logoOn.svg'; // Substitua pelo caminho do seu arquivo SVG
import { useNavigation } from '@react-navigation/native';
import { t } from 'i18next';


export default function Login() {

    const navigation = useNavigation();

    return (
        <Background>

            <Box flex={1} marginTop={45}>
                <LogoSVG width={145} height={60} />
            </Box>

            <Box justifyContent='flex-end' flex={2} marginBottom={50}>

                <Text style={styles.subtitle}>{t('PAGES.AUTH.LOGIN.SUBTITLE')}</Text>

                <TouchableOpacity style={styles.googleButton} onPress={() => { }}>
                    <GoogleSvg />
                </TouchableOpacity>

                <TouchableOpacity style={styles.appleButton} onPress={() => { }}>
                    <AppleSvg />
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Register') }}>
                    <Text style={styles.buttonEmail}>E-mail</Text>
                </TouchableOpacity>
            </Box>

        </Background>
    );
}

const styles = StyleSheet.create({
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
        fontSize: 35,
        marginBottom: 31,
        textAlign: 'center',
        fontWeight: 'bold',
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
    emailButton: {
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#ddd',
        marginBottom: 10,
        textAlign: 'center',
    },
    buttonEmail: {
        color: '#2F419E',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 15,

    },
    button: {

    }
});
