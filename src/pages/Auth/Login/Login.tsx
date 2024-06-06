import React from 'react';
import {  Text, TouchableOpacity } from 'react-native';
import {Box} from '@mobile/components/Box/Box';
import {Background} from '@mobile/components/Background';
import GoogleSvg from '@mobile/assets/google.svg'; 
import AppleSvg from '@mobile/assets/apple.svg'; 
import LogoSVG from '@mobile/assets/logoOn.svg'; 
import { useNavigation } from '@react-navigation/native';
import { t } from 'i18next';
import { styles } from './styles';
import { lightTheme } from '@mobile/theme';


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
