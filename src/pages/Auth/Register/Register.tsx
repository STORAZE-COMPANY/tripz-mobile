import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Background } from '@mobile/components/Background';
import { Box } from '@mobile/components/Box';
import { TopBarComponent } from '@mobile/components/TopBarAuth';
import { Input } from '@mobile/components/Input';
import { lightTheme } from '@mobile/theme';
import { ButtonDefault } from '@mobile/components/ButtonDefault';
import { t } from 'i18next';
import { FormField } from './FormInput';


const Register: React.FC = () => {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState({
        name: '',
        age: ''
    });
    const handleNextStep = () => {
        setStep(prevStep => prevStep + 1);
    };

    const handleRegister = () => {
        //cadastro de usuário
        console.log('Registering user:', { email, password, userData });
    };


    const backgroundStyle = {
        gradient1: lightTheme.colors.backgroundColorOne,
        gradient2: lightTheme.colors.backgroundColorTwo
    };

    const StepOne = () => {
        return (
            <Box>
                <Box  pdTop={1}>
                    <TopBarComponent titleText="Bem vindo(a)!" currentStep={1} totalSteps={4} />
                </Box>
                <Box flex={1} alignItems='center' pdTop={4.6} width={100}>
                    <Input justifyContent='flex-start' width={90} placeholder={(t('PAGES.AUTH.LOGIN.EMAIL'))} label={(t('PAGES.AUTH.LOGIN.TEXTREGISTER'))} />
                </Box>
                <Box alignItems='center' bottom={5} >
                    <ButtonDefault width={90} height={5} text='Avançar' color={lightTheme.colors.secondary} onPress={handleNextStep} />
                </Box>
            </Box>
        );
    }

    return (
        <Background {...backgroundStyle}>

            <StepOne />
            {/* {step === 2 && (
                <Box flex={1}>
                    <Box top={20}>
                        <TopBarComponent titleText="Insira sua senha" currentStep={1} totalSteps={4} />
                    </Box>
                    <Box top={20} alignItems='center'>
                        <Input placeholder='Digite sua senha' label='Senha' />
                    </Box>
                    <Box top={510}>
                        <Button title="Avançar" onPress={handleNextStep} />
                    </Box>
                </Box>
            )}
            {step === 3 && (
                <Box flex={1}>
                    <Box top={20}>
                        <TopBarComponent titleText="Faça seu cadastro" currentStep={2} totalSteps={4} />
                    </Box>
                    <Box top={20} alignItems='center'>
                        <Input placeholder='oi' label='Por favor, informe seu e-mail' />
                    </Box>
                    <Box top={510}>
                        <Button title="Avançar" onPress={handleNextStep} />
                    </Box>
                </Box>
            )}
            {step === 4 && (
                <Box flex={1}>
                    <Box top={20}>
                        <TopBarComponent titleText="Bem vindo(a)!" currentStep={1} totalSteps={4} />
                    </Box>
                    <Box top={20} alignItems='center'>
                        <Input placeholder='oi' label='Por favor, informe seu e-mail' />
                    </Box>

                    <Box top={510}>
                        <Button title="Avançar" onPress={handleNextStep} />
                    </Box>
                </Box>
            )} */}



        </Background>

    );
};

export { Register };