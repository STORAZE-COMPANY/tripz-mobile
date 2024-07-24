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
  

    const showEmailNotFoundAlert = (setIsLogin, t, navigation, email) => {
        setIsLogin(false);
        Alert.alert(
            t('PAGES.AUTH.REGISTER.ALERTS.ERROR.EMAILNOTFOUND'),
            t('PAGES.AUTH.REGISTER.ALERTS.ERROR.EMAILNOTFOUND2'),
            [
                { text: t('PAGES.AUTH.REGISTER.ALERTS.ERROR.CANCEL'), style: 'cancel' },
                { text: t('PAGES.AUTH.REGISTER.ALERTS.ERROR.ACCEPT'), onPress: () => navigation.navigate('StepCode', { email }) },
            ]
        );
    };

    const handleNextStep = async () => {
       
        if (email) {
            console.log(email)
            try {
                const userEmail = await getUserByEmail(email);
                if (userEmail) {
                    console.log(userEmail)
                  navigation.navigate('StepPassword', { email });     
                }
            } catch (error:any) {
                if (error.response) {
                    const status = error.response.status;

                    if (status === 404) { 
                      console.log("Erro 404")

                    } else if (status === 403) {

                        Alert.alert(t('PAGES.AUTH.REGISTER.ALERTS.ERROR.403'));

                    } else if (status === 400) {
                        {showEmailNotFoundAlert(setIsLogin, t, navigation, email)}
                                      
                    } else {
                        Alert.alert(t('PAGES.AUTH.REGISTER.ALERTS.ERROR.ERROREMAIL'));
                        
                    }
                } 
            }
        } else {
            Alert.alert(t('PAGES.AUTH.REGISTER.ALERTS.ERROR.EMAILNULL'));
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
