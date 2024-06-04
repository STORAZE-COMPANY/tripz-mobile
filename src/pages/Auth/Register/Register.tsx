import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Background from '../../../components/Background/Background';
import Box from '../../../components/Box/Box';
import TopBarComponent from '../../../components/TopBarAuth/TopBarAuth';
import { Input } from '../../../components/Input/Input';

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
        // Aqui você vai cadastrar o usuário com os dados coletados
        console.log('Registering user:', { email, password, userData });
    };
    return (
        <Background>
            <Box>
                {step === 1 && (
                    <Box flex={1}>
                        <Box top={20}>
                            <TopBarComponent titleText="Bem vindo(a)!" currentStep={1} totalSteps={4} />
                        </Box>
                        <Box top={20} alignItems='center'>
                            <Input placeholder='E-mail' label='Por favor, informe seu e-mail' />
                        </Box>

                        {/* <TextInput
                            style={styles.input}
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                        /> */}
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

                        {/* <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    /> */}
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

                        {/* <TextInput
                         style={styles.input}
                         value={email}
                         onChangeText={setEmail}
                         keyboardType="email-address"
                     /> */}
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

                        {/* <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    /> */}
                        <Box top={510}>
                            <Button title="Avançar" onPress={handleNextStep} />
                        </Box>
                    </Box>
                )}
            </Box>
        </Background>
    );
};

export default Register;