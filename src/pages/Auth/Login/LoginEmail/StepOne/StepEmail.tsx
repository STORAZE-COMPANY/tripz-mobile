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
import { getUserByEmail, sendTokenToEmail } from '@mobile/services/UserService';
import { useAppContext } from '@mobile/context';

const StepEmail: React.FC = () => {
  const navigation = useNavigation();
  const { setEmail } = useAppContext(); // Use o contexto para armazenar o email
  const [email, setLocalEmail] = useState('');

  const handleNextStep = async () => {
    if (!email.trim()) {
      Alert.alert(t('PAGES.AUTH.REGISTER.ALERTS.ERROR.EMAILNULL'));
      return;
    }
  
    if (!isValidEmail(email)) {
      Alert.alert('Erro', 'Por favor, insira um e-mail válido!');
      return;
    }
  
    try {
      const userEmail = await getUserByEmail(email);
      if (userEmail) {
        setEmail(email); // Armazena o email no contexto
        navigation.navigate('StepPassword');
      } else {
        throw new Error('Usuário não encontrado');
      }
    } catch (error) {
      if (error.message === 'Usuário não encontrado') {
        try {
          await sendTokenToEmail(email);
          navigation.navigate('StepCode', { email });
        } catch (sendError) {
          Alert.alert(t('PAGES.AUTH.REGISTER.ALERTS.ERROR.SENDTOKENFAIL'), sendError.message);
        }
      } else {
        Alert.alert(t('PAGES.AUTH.REGISTER.ALERTS.ERROR.USERSEARCHFAIL'), error.message);
      }
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

  const isButtonDisabled = !email.trim();

  return (
    <Background {...backgroundStyle}>
      <Box>
        <Box>
          <TopBarComponent titleText={t('PAGES.AUTH.REGISTER.TITLETOP')} currentStep={1} totalSteps={4} />
        </Box>
        <Box alignItems='center'>
          <Box flex={1} alignItems='center' pdTop={30} width={330}>
            <Input
              width={280}
              placeholder={t('PAGES.AUTH.REGISTER.EMAIL')}
              label={t('PAGES.AUTH.REGISTER.TEXTEMAIL')}
              value={email}
              onChangeText={setLocalEmail}
            />
          </Box>
          <Box flex={1} top={170}>
            <ButtonDefault
              width={330}
              height={40}
              borderRadius={8}
              text={t('PAGES.AUTH.REGISTER.BUTTON.NEXT')}                         
              onPress={handleNextStep}
              disabled={isButtonDisabled}
            />
          </Box>
        </Box>
      </Box>
    </Background>
  );
};

export { StepEmail };
