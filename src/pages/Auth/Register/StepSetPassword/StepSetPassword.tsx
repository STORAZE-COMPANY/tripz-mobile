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


const StepSetPassword: React.FC = () => {
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

    console.log(route.params)

    const handleNextStep = async () => {
        if (password) {
            navigation.navigate("StepDataUser", { email, password });
        } else {
            console.log("Sem senha");
            Alert.alert(t('PAGES.AUTH.REGISTER.ALERTS.ERROR.PASSWORDNULL'))
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

    return (
        <Background {...backgroundStyle}>
            <Box >
                <Box pdTop={1} width={100} >
                    <TopBarComponent titleText={(t('PAGES.AUTH.REGISTER.TEXTPASSWORD.TITLETOP'))} currentStep={3} totalSteps={4} />
                </Box>

                <Box alignItems='center' pdTop={4} flex={1} >
                    <Input type='password' strengthBars width={90} pdTop={2} justifyContent='flex-start' label='Crie uma senha' placeholder={(t('PAGES.AUTH.REGISTER.PLACEHOLDERPASSWORD'))}
                        onChangeText={setPassword}
                    />
                </Box>
                <Box flex={6} pdHorizontal={3} pdVertical={4}>
                    <Box flexDirection='row' alignItems='center' marginBottom={0.5}>
                        <Text style={textBold} >{(t('PAGES.AUTH.REGISTER.TEXTPASSWORD.TEXT'))} </Text>
                        <Text >{(t('PAGES.AUTH.REGISTER.TEXTPASSWORD.TEXT2'))}</Text>
                    </Box>
                    <Text style={textSimple2}>{(t('PAGES.AUTH.REGISTER.TEXTPASSWORD.TEXT3'))} </Text>
                    <Text style={textSimple2}>{(t('PAGES.AUTH.REGISTER.TEXTPASSWORD.TEXT4'))} </Text>
                    <Text style={textSimple2}>{(t('PAGES.AUTH.REGISTER.TEXTPASSWORD.TEXT5'))} </Text>
                    <Text style={textSimple2}>{(t('PAGES.AUTH.REGISTER.TEXTPASSWORD.TEXT6'))} </Text>
                    <Text style={textSimple2}>{(t('PAGES.AUTH.REGISTER.TEXTPASSWORD.TEXT7'))} </Text>

                </Box>
                <Box alignItems='center' bottom={5} >
                    <ButtonDefault width={90} height={5} text={(t('PAGES.AUTH.REGISTER.TEXTPASSWORD.BUTTON.CONFIRM'))} color={lightTheme.colors.secondary} onPress={handleNextStep} />
                </Box>
            </Box>
        </Background>
    );
};

export { StepSetPassword };
