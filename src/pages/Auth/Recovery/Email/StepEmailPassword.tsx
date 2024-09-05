import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { t } from 'i18next';
import { Background } from '@mobile/components/Background';
import { Box } from '@mobile/components/Box';
import { ButtonDefault } from '@mobile/components/ButtonDefault';
import { Input } from '@mobile/components/Input';
import { TopBarComponent } from '@mobile/components/TopBarAuth';
import { lightTheme } from '@mobile/theme';
import { getUserByEmail, sendTokenToEmail, sendTokenToPassword } from '@mobile/services/UserService';

const StepEmailPassword: React.FC = () => {
    const navigation = useNavigation();
    const route = useRoute(); // Hook para acessar os parâmetros de navegação
    const [email, setEmail] = useState('');

    // Recebe o email passado como parâmetro de navegação
    useEffect(() => {
        if (route.params && route.params.email) {
            setEmail(route.params.email);
        }
    }, [route.params]);

    const handleNextStep = async () => {
        if (!email.trim()) {
            Alert.alert(t('PAGES.AUTH.REGISTER.ALERTS.ERROR.EMAILLABEL'));
            return;
        }
   
        if (!isValidEmail(email)) {
            Alert.alert('Erro', 'Por favor, insira um e-mail válido!');
            return;
        }
   
        try {
            await sendTokenToPassword(email);
            navigation.navigate('StepEmailToken', { email });
        } catch (error) {
            console.error('Erro ao enviar o token de redefinição de senha:', error);
            Alert.alert(t('PAGES.AUTH.REGISTER.ALERTS.ERROR.ERRO'));
        }
    };
   

    const isValidEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const backgroundStyle = {
        gradient1: lightTheme.colors.gradientBackgroundColorOne,
        gradient2: lightTheme.colors.gradientBackgroundColorTwo
    };

    const isButtonDisabled = !email.trim(); // Verifica se o campo de e-mail está vazio

    return (
        <Background {...backgroundStyle}>
            <Box>
                <Box>
                    <TopBarComponent titleText={t('PAGES.AUTH.REGISTER.TITLETOP4')} currentStep={1} totalSteps={3} />
                </Box>
                <Box alignItems='center'>
                    <Box flex={1} alignItems='center' pdTop={30} width={330}>
                        <Input
                            width={280}
                            placeholder={t('PAGES.AUTH.REGISTER.EMAIL')}
                            label={t('PAGES.AUTH.REGISTER.TEXTEMAIL')}
                            value={email}
                            onChangeText={setEmail}
                        />
                    </Box>
                    <Box flex={1} top={170}>
                        <ButtonDefault
                            width={330}
                            height={40}
                            borderRadius={8}
                            text={t('PAGES.AUTH.REGISTER.BUTTON.NEXT')}
                            onPress={handleNextStep}
                            disabled={isButtonDisabled} // Desativa o botão
                        />
                    </Box>
                </Box>
            </Box>
        </Background>
    );
};

export { StepEmailPassword };
