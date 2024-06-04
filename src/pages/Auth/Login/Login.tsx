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
import { fontBold, fontRegular } from '@mobile/typograph/typograph';
import { styles } from './styles';


export default function Login() {

    const navigation = useNavigation();

    return (
        <Background>

            <Box marginTop={45}>
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
                    <Text style={styles.buttonEmail}>{t('PAGES.AUTH.LOGIN.EMAIL')}</Text>
                </TouchableOpacity>
            </Box>

        </Background>
    );
}
