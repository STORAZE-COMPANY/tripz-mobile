import React, { useEffect, useState } from 'react';
import {  Text, Alert } from 'react-native';
import { Background } from '@mobile/components/Background';
import { Box } from '@mobile/components/Box';
import { ButtonDefault } from '@mobile/components/ButtonDefault';
import { Input } from '@mobile/components/Input';
import { TopBarComponent } from '@mobile/components/TopBarAuth';
import { lightTheme } from '@mobile/theme';
import { useNavigation, useRoute } from '@react-navigation/native';
import { t } from 'i18next';
import { fonts, poppinsTypography } from '@mobile/utils/typograph';
import { FormField } from '../FormInput';
import { registerUser } from '@mobile/services/UserService';

const StepDataUser: React.FC = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [email, setEmail] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
 
    // Recebe o email passado como parâmetro de navegação
    useEffect(() => {
        if (route.params?.email && route.params?.password) {
            setEmail(route.params.email);
            setPassword(route.params.password);
        }
    }, [route.params]);

    const handleRegister = async () => {
        console.log('email:', email);
        console.log('password:', password);
        console.log("nome", name)

        try {
            const user = {
                email,
                password,
                name,
                city,
                country,
                state
            };

            const userData = await registerUser(user);
            if (userData) {
                setIsLogin(true);
                navigation.navigate('StepEmail', { email });

                console.log('Cadastro realizado com sucesso!',userData);
               
            } else {
                throw new Error(`Erro ao cadastrar usuário. Status: ${response.status}`);
            }
        } catch (error: any) {
            console.error('Erro ao cadastrar usuário:', error.message);
            Alert.alert('Erro', `Erro ao cadastrar usuário. ${error.message}`);
        }
    };

    const backgroundStyle = {
        gradient1: lightTheme.colors.gradientBackgroundColorOne,
        gradient2: lightTheme.colors.gradientBackgroundColorTwo
    };


    const textSimple2 = {
        color: lightTheme.colors.textDefault,
    }

    const textSimpleTerms = {
        fontSize: fonts.fontSizeSmall.fontSize,
        color: lightTheme.colors.textDefault,
        fontWeight: poppinsTypography.fontWeightRegular.fontWeight,
        fontFamily: poppinsTypography.fontFamilyRegular.fontFamily,
        lineHeight: 16,
    }

    const textColorTerms = {
        fontSize: fonts.fontSizeSmall.fontSize,
        color: lightTheme.colors.primary,
        fontWeight: poppinsTypography.fontWeightBold.fontWeight,
        fontFamily: poppinsTypography.fontFamilyRegular.fontFamily,
        lineHeight: 16,
        textDecorationLine: 'underline',
        paddingBottom: 3,

    }


    return (
        <Background {...backgroundStyle}>
              <Box>
                <Box pdTop={1}>
                    <TopBarComponent titleText={(t('PAGES.AUTH.REGISTER.DATAUSER.TITLETOP'))} currentStep={4} totalSteps={4} />
                </Box>

                <Box alignItems='center' pdTop={4} >
                    <Input width={90} pdTop={2} justifyContent='flex-start' label={(t('PAGES.AUTH.REGISTER.LABELNAME'))} placeholder={(t('PAGES.AUTH.REGISTER.PLACEHOLDERNAME'))}
                        value={name}
                        onChangeText={setName}
                    />
                </Box>

                <Box flex={6} pdTop={2}  >
                    <Box flexDirection='row' pdHorizontal={2}>
                        <Text style={textSimple2} >{(t('PAGES.AUTH.REGISTER.DATAUSER.LABELLOCATION'))}</Text>
                    </Box>
                    <FormField />

                    <Box alignItems='center' justifyContent='center' pdHorizontal={3} pdTop={4}>

                        <Text style={textSimpleTerms}>{(t('PAGES.AUTH.REGISTER.DATAUSER.TEXTTERMS'))}</Text>
                        <Box flexDirection='row' flexWrap='wrap' alignItems='center' justifyContent='center' pdHorizontal={1} >
                            <Text style={textSimpleTerms}>{(t('PAGES.AUTH.REGISTER.DATAUSER.TEXTTERMS2'))}</Text>
                            <Text style={textColorTerms}>{(t('PAGES.AUTH.REGISTER.DATAUSER.TEXTTERMS3'))}</Text>
                            <Text style={textSimpleTerms}>{(t('PAGES.AUTH.REGISTER.DATAUSER.TEXTTERMS4'))}</Text>
                            <Text style={textColorTerms}>{(t('PAGES.AUTH.REGISTER.DATAUSER.TEXTTERMS5'))}</Text>
                        </Box>
                    </Box>
                </Box>

                <Box alignItems='center' bottom={5} >
                    <ButtonDefault width={90} height={5} text={(t('PAGES.AUTH.REGISTER.DATAUSER.BUTTON.CONFIRM'))} color={lightTheme.colors.secondary} onPress={handleRegister} />
                </Box>
            </Box>
        </Background>
    );
};

export { StepDataUser };
