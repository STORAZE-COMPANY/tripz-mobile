import React, { useEffect, useState } from 'react';
import {  Alert } from 'react-native';
import { Background } from '@mobile/components/Background';
import { Box } from '@mobile/components/Box';
import { ButtonDefault } from '@mobile/components/ButtonDefault';
import { Input } from '@mobile/components/Input';
import { TopBarComponent } from '@mobile/components/TopBarAuth';
import { lightTheme } from '@mobile/theme';
import { useNavigation, useRoute } from '@react-navigation/native';
import { t } from 'i18next';
import { loginUser } from '@mobile/services/UserService';

const StepPassword: React.FC = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    // Recebe o email passado como parâmetro de navegação
    useEffect(() => {
        if (route.params && route.params.email) {
            setEmail(route.params.email);
        }
    }, [route.params]);

    const handleNextStep = async () => {
        if (!password) {
            Alert.alert('Erro', 'Por favor, preencha o email e a senha.');
            return;
        }

        try {
            const userPassword = await loginUser(email, password);
            if (userPassword) {
                setIsLogin(true);
                navigation.navigate('StepLogin', { email });

            } else {
                throw new Error(`Erro ao fazer login. Status: ${userPassword.status}`);
            }
        } catch (error:any) {
            if (error.response) {
                const status = error.response.status;
                if (status === 401) {
                    Alert.alert('Erro', 'Senha incorreta.');
                } else if (status === 403) {
                    Alert.alert('Erro', 'Acesso negado. Senha incorreta');
                } else {
                    Alert.alert('Erro', `Erro ao fazer login. ${error.message}`);
                }
            } else {
                Alert.alert('Erro', `Erro ao fazer login. ${error.message}`);
            }
        }
    };

    const backgroundStyle = {
        gradient1: lightTheme.colors.gradientBackgroundColorOne,
        gradient2: lightTheme.colors.gradientBackgroundColorTwo
    };

    return (
        <Background {...backgroundStyle}>
            <Box>
                <Box pdTop={1}>
                    <TopBarComponent titleText={t('PAGES.AUTH.REGISTER.TITLETOP2')} currentStep={2} totalSteps={2} />
                </Box>
                <Box flex={1} alignItems='center' pdTop={4.6} width={100} >
                    <Input
                        type='password'

                        width={90}
                        placeholder={t('PAGES.AUTH.REGISTER.PLACEHOLDERPASSWORD')}
                        label={t('PAGES.AUTH.REGISTER.PASSWORD')}
                        value={password}
                        onChangeText={setPassword}

                    />
                </Box>
                <Box alignItems='center' bottom={5}>
                    <ButtonDefault
                        width={90}
                        height={5}
                        text={t('PAGES.AUTH.REGISTER.BUTTON.LOGIN')}
                        color={lightTheme.colors.secondary}
                        onPress={handleNextStep}
                    />
                </Box>
            </Box>
        </Background>
    );
};

export { StepPassword };
