import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { Background } from '@mobile/components/Background';
import { Box } from '@mobile/components/Box';
import { TopBarComponent } from '@mobile/components/TopBarAuth';
import { Input } from '@mobile/components/Input';
import { lightTheme } from '@mobile/theme';
import { ButtonDefault } from '@mobile/components/ButtonDefault';
import { t } from 'i18next';
import { FormField } from './FormInput';
import { styles } from './styles';
import { fonts, latoTypography, poppinsTypography } from '@mobile/utils/typograph';
import axios from 'axios';



const Register: React.FC = () => {

    const myFuckingFormInitialState = {
        email2: '',
        password: ''
    
    }

    const [step, setStep] = useState(1);
  
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [myForm, setMyForm] = useState(myFuckingFormInitialState)

    const handleNextStep = () => {
        setStep(prevStep => prevStep + 1);
        console.log(email)
    };


    const baseURL = 'http://10.0.2.2:8080/';

    const handleRegister = async () => {
        console.log('email:', email);
        console.log('password:', password);

        try {
            const user = {
                email,
                password,
                name,
                city,
                country,
                state
            };

            const response = await axios.post(`${baseURL}user/create`, user, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 201) {
                console.log('Cadastro realizado com sucesso!', response);
                // navigation.navigate('Login');
            } else {
                throw new Error(`Erro ao cadastrar usuário. Status: ${response.status}`);
            }
        } catch (error: any) {
            console.error('Erro ao cadastrar usuário:', error.message);
            Alert.alert('Erro', `Erro ao cadastrar usuário. ${error.message}`);
        }
    };


    const backgroundStyle = {

        gradient1: lightTheme.colors.gradientBackgroundColorTwo,
        gradient2: lightTheme.colors.gradientBackgroundColorOne,
    };

    const boldText = {
        color: lightTheme.colors.textBold,
        fontFamily: latoTypography.fontFamilyBold.fontFamily,
        fontSize: fonts.fontSizeMediumSmall.fontSize,
        fontWeight: poppinsTypography.fontFamilyBold.fontFamily,
        lineHeight: 14,

    };
    const textBold = {
        fontWeight: poppinsTypography.fontWeightBold.fontWeight,

    }

    const textSimple = {
        fontSize: fonts.fontSizeMediumLSmall.fontSize,
        fontWeight: poppinsTypography.fontWeightRegular.fontWeight,
        fontFamily: poppinsTypography.fontFamilyRegular.fontFamily,
        lineHeight: 16,
    }
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

    
    const StepTwo = () => {
        return (
            <Box>
                <Box pdTop={1}>
                    <TopBarComponent titleText={(t('PAGES.AUTH.REGISTER.TITLETOP2'))} currentStep={2} totalSteps={2} />
                </Box>
                <Box flex={1} alignItems='center' pdTop={4.6} width={100}>
                    <Input type='password' justifyContent='flex-start' width={90} placeholder={(t('PAGES.AUTH.REGISTER.PLACEHOLDERPASSWORD'))} label={(t('PAGES.AUTH.REGISTER.PASSWORD'))}
                        value={password}
                        onChangeText={setPassword} />
                </Box>
                <Box alignItems='center' bottom={5} >
                    <ButtonDefault width={90} height={5} text={(t('PAGES.AUTH.REGISTER.BUTTON.LOGIN'))} color={lightTheme.colors.secondary} onPress={handleNextStep} />
                </Box>
            </Box>
        );
    }

    const StepThree = () => {
        return (
            <Box>
                <Box pdTop={1}>
                    <TopBarComponent titleText={(t('PAGES.AUTH.REGISTER.TITLETOP3'))} currentStep={2} totalSteps={4} />
                </Box>

                <Box pdHorizontal={2} pdVertical={2}>
                    <Text>{(t('PAGES.AUTH.REGISTER.TEXTCODE.TEXT'))}</Text>
                    <Text>{email}</Text>
                </Box>
                <Box flex={1} alignItems='center'>
                    <Input type='code' pdTop={2} justifyContent='flex-start' placeholder={(t('PAGES.AUTH.REGISTER.PLACEHOLDERPASSWORD'))}
                    />
                </Box>
                <Box flex={6} pdHorizontal={2} top={0.2}>
                    <Box>
                        <Box flexDirection='row' alignItems='center'>
                            <Text style={boldText}>{(t('PAGES.AUTH.REGISTER.TEXTCODE.TEXTIMPORTANT.ONE'))} </Text>
                            <Text style={textSimple}>{(t('PAGES.AUTH.REGISTER.TEXTCODE.TEXTIMPORTANT.TWO'))} </Text>
                            <Text style={boldText}>{(t('PAGES.AUTH.REGISTER.TEXTCODE.TEXTIMPORTANT.THREE'))} </Text>
                            <Text style={textSimple}>{(t('PAGES.AUTH.REGISTER.TEXTCODE.TEXTIMPORTANT.FOUR'))} </Text>
                        </Box>
                        <Box flexDirection='row' alignItems='center'>
                            <Text style={boldText}>{(t('PAGES.AUTH.REGISTER.TEXTCODE.TEXTIMPORTANT.FIVE'))} </Text>
                            <Text style={textSimple}>{(t('PAGES.AUTH.REGISTER.TEXTCODE.TEXTIMPORTANT.SIX'))} </Text>
                        </Box>
                    </Box>
                    <Box alignItems='center' pdTop={3}>
                        <Text style={textSimple}>{(t('PAGES.AUTH.REGISTER.TEXTCODE.TEXTIMPORTANT.SEVEN'))} 00:59s</Text>
                    </Box>
                </Box>

                <Box alignItems='center' bottom={5} >
                    <ButtonDefault width={90} height={5} text={(t('PAGES.AUTH.REGISTER.TEXTCODE.BUTTON.CONFIRM'))} color={lightTheme.colors.secondary} onPress={handleNextStep} />
                </Box>
            </Box>
        );
    }

    const StepFour = () => {
        return (
            <Box>
                <Box pdTop={1}>
                    <TopBarComponent titleText={(t('PAGES.AUTH.REGISTER.TEXTPASSWORD.TITLETOP'))} currentStep={3} totalSteps={4} />
                </Box>

                <Box alignItems='center' pdTop={4} >
                    <Input type='password' strengthBars width={90} pdTop={2} justifyContent='flex-start' label='Crie uma senha' placeholder={(t('PAGES.AUTH.REGISTER.PLACEHOLDERPASSWORD'))}
                        onChangeText={setConfirmPassword}
                    />
                </Box>
                <Box flex={6} pdTop={2} >
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
        );
    }

    const StepFive = () => {
        return (
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
        );
    }

    const renderStep = () => {
        switch (step) {
            case 1:
                return <StepOne />;
            case 2:
                return <StepTwo />;
            case 3:
                return <StepThree />;
            case 4:
                return <StepFour />;
            case 5:
                return <StepFive />;

        }
    };

    return (
        <Background {...backgroundStyle}>

            {renderStep()}

        </Background>

    );
};

export { Register };