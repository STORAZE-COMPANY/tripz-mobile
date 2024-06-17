import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Background } from '@mobile/components/Background/Background';
import { Box } from '@mobile/components/Box/Box';
import { TopBarComponent } from '@mobile/components/TopBarAuth';
import { Input } from '@mobile/components/Input';
import { lightTheme } from '@mobile/theme';


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
        gradient1: lightTheme.colors.gradientBackgroundColorTwo,
        gradient2: lightTheme.colors.gradientBackgroundColorOne,
    };

    return (
        <Background {...backgroundStyle}>
            <Box>
                {step === 1 && (
                    <Box flex={1}>
                        <Box top={20}>
                            <TopBarComponent titleText="Bem vindo(a)!" currentStep={1} totalSteps={4} />
                        </Box>
                        <Box top={20} alignItems='center'>
                            <Input placeholder='E-mail' label='Por favor, informe seu e-mail' />
                        </Box>
                        <Box top={510}>
                            <Button title="Avançar" onPress={handleNextStep} />
                        </Box>
                    </Box>
                )}
                {step === 2 && (
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
                )}
            </Box>
        </Background>
    );
};

export { Register };