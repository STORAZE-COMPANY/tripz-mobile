import React, { useEffect, useState } from 'react';
import { Alert, Text } from 'react-native';
import { Background } from '@mobile/components/Background';
import { Box } from '@mobile/components/Box';
import { ButtonDefault } from '@mobile/components/ButtonDefault';
import { Input } from '@mobile/components/Input';
import { TopBarComponent } from '@mobile/components/TopBarAuth';
import { lightTheme } from '@mobile/theme';
import { useNavigation, useRoute } from '@react-navigation/native';
import { t } from 'i18next';
import { poppinsTypography } from '@mobile/utils/typograph';
import { scale } from '@mobile/utils/resize';
import axios from 'axios';

const StepNewPassword: React.FC = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Recebe o email passado como parâmetro de navegação
    useEffect(() => {
        if (route.params?.email) {
            setEmail(route.params.email);
        }
    }, [route.params]);

    const handleNextStep = async () => {
        if (!password) {
            Alert.alert(t('PAGES.AUTH.REGISTER.ALERTS.ERROR.PASSWORDNULL'));
            return;
        }

        try {
            // Enviando a solicitação POST para o endpoint de atualização de senha
            const response = await axios.post('http://localhost:8080/auth/updatePassWordUser', {
                email: email.trim(),
                password: password.trim(),
            });

            // Verifica se a resposta é bem-sucedida (status 200)
            if (response.status === 200) {
                navigation.navigate("StepEmail", { email, password });
            } else {
                Alert.alert(t('PAGES.AUTH.REGISTER.ALERTS.ERROR.ERRO'));
            }
        } catch (error) {
            console.error('Erro ao atualizar a senha:', error.response?.data || error.message);
            Alert.alert(t('PAGES.AUTH.REGISTER.ALERTS.ERROR.ERRO'));
        }
    };

    const backgroundStyle = {
        gradient1: lightTheme.colors.gradientBackgroundColorOne,
        gradient2: lightTheme.colors.gradientBackgroundColorTwo
    };

    const textSimple2 = {
        color: lightTheme.colors.textDefault,
    }

    const textBold = {
        fontWeight: poppinsTypography.fontWeightBold.fontWeight,
    }

    const isButtonDisabled = !password.trim(); 

    return (
        <Background {...backgroundStyle}>
            <Box >
                <Box width={343}>
                    <TopBarComponent titleText={(t('PAGES.AUTH.REGISTER.TEXTPASSWORD.TITLETOP2'))} currentStep={3} totalSteps={3} />
                </Box>

                <Box alignItems='center' pdTop={30} flex={1} >
                    <Input type='password' strengthBars width={scale(230)} label='Crie uma senha' placeholder={(t('PAGES.AUTH.REGISTER.PLACEHOLDERPASSWORD'))}
                        onChangeText={setPassword}
                    />
                </Box>
                <Box flex={6} pdHorizontal={14} pdVertical={15}>
                    <Box flexDirection='row' alignItems='center' marginBottom={0.5}>
                        <Text style={textBold} >{(t('PAGES.AUTH.REGISTER.TEXTPASSWORD.TEXT'))} </Text>
                        <Text >{(t('PAGES.AUTH.REGISTER.TEXTPASSWORD.TEXT2'))}</Text>
                    </Box>
                    <Box left={8} top={2}>
                        <Text style={textSimple2}>{(t('PAGES.AUTH.REGISTER.TEXTPASSWORD.TEXT3'))} </Text>
                        <Text style={textSimple2}>{(t('PAGES.AUTH.REGISTER.TEXTPASSWORD.TEXT4'))} </Text>
                        <Text style={textSimple2}>{(t('PAGES.AUTH.REGISTER.TEXTPASSWORD.TEXT5'))} </Text>
                        <Text style={textSimple2}>{(t('PAGES.AUTH.REGISTER.TEXTPASSWORD.TEXT6'))} </Text>
                        <Text style={textSimple2}>{(t('PAGES.AUTH.REGISTER.TEXTPASSWORD.TEXT7'))} </Text>
                    </Box>
                </Box>
                <Box alignItems='center' flex={5} top={300} position='absolute' justifyContent='center' left={12}>
                    <Input type='password' width={scale(230)} label='Repita a senha' placeholder={(t('PAGES.AUTH.REGISTER.PLACEHOLDERPASSWORD'))}
                        onChangeText={setPassword}
                    />
                </Box>
                <Box alignItems='center' bottom={45} >
                    <ButtonDefault width={330} height={40} borderRadius={8} disabled={isButtonDisabled} text={(t('PAGES.AUTH.REGISTER.TEXTPASSWORD.BUTTON.CONFIRM'))} color={lightTheme.colors.secondary} onPress={handleNextStep} />
                </Box>
            </Box>
        </Background>
    );
};

export { StepNewPassword };
