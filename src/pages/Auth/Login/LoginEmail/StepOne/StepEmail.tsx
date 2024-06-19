import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { t } from 'i18next';
import { Background } from '@mobile/components/Background';
import { Box } from '@mobile/components/Box';
import { ButtonDefault } from '@mobile/components/ButtonDefault';
import { Input } from '@mobile/components/Input';
import { TopBarComponent } from '@mobile/components/TopBarAuth';
import { lightTheme } from '@mobile/theme';
import { getUserByEmail } from '@mobile/services/UserService';

const StepEmail: React.FC = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [isLogin, setIsLogin] = useState(false);


    const handleNextStep = async () => {
       
        if (email) {
            try {
                const userEmail = await getUserByEmail(email);
                if (userEmail) {
                  navigation.navigate('StepPassword', { email });     
                }
            } catch (error:any) {
                if (error.response) {
                    const status = error.response.status;

                    if (status === 404) { 
                      Alert.alert("Pagina não encontrada")

                    } else if (status === 403) {
                        console.log("alaaaaaaaaaa",email)
                        Alert.alert('Erro', `Acesso negado. ${error.message}`);

                    } else if (status === 400) {
                        setIsLogin(false);
                        Alert.alert(
                            'Email não encontrado',
                            'O email não foi encontrado. Deseja continuar para a criação de conta?',
                            [
                                { text: 'Cancelar', style: 'cancel' },
                                { text: 'Sim', onPress: () => navigation.navigate('StepCode', { email }) },
                            ]
                        );
                    } else {
                        Alert.alert('Erro', `Erro ao verificar e-mail. ${error.message}`);
                    }
                } else {
                    Alert.alert('Erro', `Erro ao verificar e-mail. ${error.message}`);
                }
            }
        } else {
            Alert.alert('Erro', 'Por favor, insira um e-mail.');
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
                    <TopBarComponent titleText={t('PAGES.AUTH.REGISTER.TITLETOP')} currentStep={1} totalSteps={4} />
                </Box>
                <Box flex={1} alignItems='center' pdTop={4.6} width={100}>
                    <Input
                        width={90}
                    
                        placeholder={t('PAGES.AUTH.REGISTER.EMAIL')}
                        label={t('PAGES.AUTH.REGISTER.TEXTEMAIL')}
                        value={email}
                        onChangeText={setEmail}
                    />
                </Box>
                <Box alignItems='center' bottom={5}>
                    <ButtonDefault
                        width={90}
                        height={5}
                        text={t('PAGES.AUTH.REGISTER.BUTTON.NEXT')}
                        color={lightTheme.colors.secondary}
                        onPress={handleNextStep}
                    />
                </Box>
            </Box>
        </Background>
    );
};

export { StepEmail };
