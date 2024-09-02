import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { lightTheme } from '@mobile/theme';
import { Background } from '@mobile/components/Background';
import GoogleSvg from '@mobile/assets/google.svg';
import AppleSvg from '@mobile/assets/apple.svg';
import LogoSVG from '@mobile/assets/logoOn.svg';
import { useNavigation } from '@react-navigation/native';
import { t } from 'i18next';
import { styles } from './styles';
import { Box } from '@mobile/components/Box';
import { scale } from '@mobile/utils/resize';

function Login() {

    const navigation = useNavigation();

    const toRegister = () => {
        navigation.navigate('StepEmail');
    }

    const backgroundStyle = {
        gradient1: lightTheme.colors.gradientBackgroundColorOne,
        gradient2: lightTheme.colors.gradientBackgroundColorTwo
    };

    const ButtonMail = {
        ...styles.buttonEmail,
    }

    const LoginTitle = {
        ...styles.title,
    }

    return (
        <Background {...backgroundStyle}>

            <Box top={45}>
                <LogoSVG width={scale(98.59)} height={scale(21)} />
            </Box>

            <Box justifyContent='flex-end' alignItems='center' flex={2} bottom={60} >
                <Box bottom={20} pdHorizontal={20}>
                    <Text style={LoginTitle}>{t('PAGES.AUTH.LOGIN.TITLE')}</Text>
                </Box>

                <Box marginBottom={7} alignItems='center'>
                    <TouchableOpacity onPress={() => { }}>
                        <GoogleSvg />
                    </TouchableOpacity>
                </Box>
                <Box>
                    <TouchableOpacity onPress={() => { }}>
                        <AppleSvg />
                    </TouchableOpacity>
                </Box>
                <Box top={15}>
                    <TouchableOpacity onPress={toRegister}>
                        <Text style={ButtonMail}>{t('PAGES.AUTH.LOGIN.EMAIL')}</Text>
                    </TouchableOpacity>
                </Box>
            </Box>

        </Background >
    );
}
export { Login }
