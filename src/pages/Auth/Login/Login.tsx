import React from 'react';
import {  Text, TouchableOpacity } from 'react-native';
import { lightTheme } from '@mobile/theme';
import {Background} from '@mobile/components/Background';
import GoogleSvg from '@mobile/assets/google.svg'; // Substitua pelo caminho do seu arquivo SVG
import AppleSvg from '@mobile/assets/apple.svg'; // Substitua pelo caminho do seu arquivo SVG
import LogoSVG from '@mobile/assets/logoOn.svg'; // Substitua pelo caminho do seu arquivo SVG
import { useNavigation } from '@react-navigation/native';
import { t } from 'i18next';
import { styles } from './styles';
import { Box } from '@mobile/components/Box';

function Login() {

    const navigation = useNavigation();
    const toRegister = () => {
        navigation.navigate('Register');
    }
    const backgroundStyle = {
        gradient1: lightTheme.colors.backgroundColorTwo,
        gradient2: lightTheme.colors.backgroundColorOne,
    };


        return (
            <Background {...backgroundStyle}>

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

                    <TouchableOpacity style={styles.button} onPress={toRegister}>
                        <Text style={styles.buttonEmail}>{t('PAGES.AUTH.LOGIN.EMAIL')}</Text>
                    </TouchableOpacity>
                </Box>

            </Background >
        );
    }
export {Login}
