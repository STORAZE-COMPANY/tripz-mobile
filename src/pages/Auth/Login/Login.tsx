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

function Login() {

    const navigation = useNavigation();

    const toRegister = () => {
        navigation.navigate('StepEmail');
    }

    const backgroundStyle = {
        gradient1: lightTheme.colors.backgroundColorOne,
        gradient2: lightTheme.colors.backgroundColorTwo
    };

    const ButtonMail = {
        ...styles.buttonEmail,
    }

    const LoginTitle = {
        ...styles.title,
    }

    return (
        <Background {...backgroundStyle}>

            <Box top={7}>
                <LogoSVG width={145} height={60} />
            </Box>

            <Box justifyContent='flex-end' flex={2} bottom={8}>
                <Box bottom={4} pdHorizontal={5}>
                    <Text style={LoginTitle}>{t('PAGES.AUTH.LOGIN.TITLE')}</Text>
                </Box>

                <Box marginBottom={1}>
                    <TouchableOpacity onPress={() => { }}>
                        <GoogleSvg />
                    </TouchableOpacity>
                </Box>
                <Box>
                    <TouchableOpacity onPress={() => { }}>
                        <AppleSvg />
                    </TouchableOpacity>
                </Box>
                <Box top={2}>
                    <TouchableOpacity onPress={toRegister}>
                        <Text style={ButtonMail}>{t('PAGES.AUTH.LOGIN.EMAIL')}</Text>
                    </TouchableOpacity>
                </Box>
            </Box>

        </Background >
    );
}
export { Login }
