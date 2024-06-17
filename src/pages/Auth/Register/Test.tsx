import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { Background } from '@mobile/components/Background';
import { Box } from '@mobile/components/Box';
import { TopBarComponent } from '@mobile/components/TopBarAuth';
import { Input } from '@mobile/components/Input';
import { lightTheme } from '@mobile/theme';
import { ButtonDefault } from '@mobile/components/ButtonDefault';
import { t } from 'i18next';
import axios from 'axios';

const Test: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const baseURL = 'http://10.0.2.2:8080/';

    const handleRegister = async () => {
        console.log('email:', email); // Verifique se o email está correto
        console.log('password:', password); // Verifique se a senha está correta
        try {
            const user = {
                email,
                password,
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
        gradient1: lightTheme.colors.backgroundColorOne,
        gradient2: lightTheme.colors.backgroundColorTwo,
    };

    return (
        <Background {...backgroundStyle}>
            <Box pdTop={1}>
                <TopBarComponent titleText={t('PAGES.AUTH.REGISTER.TITLETOP')} />
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
            <Box flex={1} alignItems='center' pdTop={4.6} width={100}>
                <Input
                    type='password'
                    width={90}
                    placeholder={t('PAGES.AUTH.REGISTER.PLACEHOLDERPASSWORD')}
                    label={t('PAGES.AUTH.REGISTER.PASSWORD')}
                    value={password}
                    onChangeText={setPassword} 
                />
            </Box>
            {error ? (
                <Box alignItems='center' pdTop={2}>
                    <Text style={{ color: 'red' }}>{error}</Text>
                </Box>
            ) : null}
            <Box alignItems='center' bottom={5}>
                <ButtonDefault
                    width={90}
                    height={5}
                    text={t('PAGES.AUTH.REGISTER.BUTTON.REGISTER')}
                    color={lightTheme.colors.secondary}
                    onPress={handleRegister}
                />
            </Box>
        </Background>
    );
};

export { Test };
