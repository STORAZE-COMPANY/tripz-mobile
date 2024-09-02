import React, { useEffect, useState } from 'react';
import { Alert, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { t } from 'i18next';
import { Background } from '@mobile/components/Background';
import { Box } from '@mobile/components/Box';
import { ButtonDefault } from '@mobile/components/ButtonDefault';
import { Input } from '@mobile/components/Input';
import { TopBarComponent } from '@mobile/components/TopBarAuth';
import { lightTheme } from '@mobile/theme';
import { validatePasswordResetToken } from '@mobile/services/UserService';
import { scale } from '@mobile/utils/resize';
import { fonts, latoTypography, poppinsTypography } from '@mobile/utils/typograph';

const StepEmailToken: React.FC = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [countdown, setCountdown] = useState(59);

    useEffect(() => {
        if (route.params && route.params.email) {
            setEmail(route.params.email);
        }
    }, [route.params]);

    const handleNextStep = async () => {
        if (!code.trim()) {
            Alert.alert(t('PAGES.AUTH.REGISTER.ALERTS.ERROR.CODELABEL'));
            return;
        }
    
        try {
            // Valida o token de redefinição de senha usando a função criada
            const isValid = await validatePasswordResetToken(code);
            
            if (isValid) {
                // Se o token for válido, navega para a tela de criação de nova senha
                navigation.navigate('StepNewPassword', { email });
            } else {
                Alert.alert('Erro', 'Token inválido. Por favor, verifique o código enviado para o seu e-mail.');
            }
        } catch (error) {
            Alert.alert(t('PAGES.AUTH.REGISTER.ALERTS.ERROR.ERRO'));
        }
    };

    const backgroundStyle = {
        gradient1: lightTheme.colors.gradientBackgroundColorOne,
        gradient2: lightTheme.colors.gradientBackgroundColorTwo,
    };

    const boldText = {
        color: lightTheme.colors.textBold,
        fontFamily: latoTypography.fontFamilyBold.fontFamily,
        fontSize: fonts.fontSizeMediumSmall.fontSize,
        fontWeight: poppinsTypography.fontFamilyBold.fontFamily,
        lineHeight: 14,
    };

    const textSimple = {
        fontSize: fonts.fontSizeMediumLSmall.fontSize,
        fontWeight: poppinsTypography.fontWeightRegular.fontWeight,
        fontFamily: poppinsTypography.fontFamilyRegular.fontFamily,
        lineHeight: 16,
    };

    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [countdown]);

    const isButtonDisabled = !code.trim();

    return (
        <Background {...backgroundStyle}>
            <Box>
                <Box>
                    <TopBarComponent titleText={t('PAGES.AUTH.REGISTER.TITLETOP4')} currentStep={2} totalSteps={3} />
                </Box>
                <Box alignItems='center'>
                    <Box flex={1} alignItems='center' pdTop={30} width={330}>
                        <Input
                            width={280}
                            placeholder={t('PAGES.AUTH.REGISTER.EMAIL')}
                            label={t('PAGES.AUTH.REGISTER.TEXTEMAIL')}
                            value={email}
                            onChangeText={setEmail}
                        />
                        <Box top={20}>
                            <Box pdHorizontal={12} right={12} >
                                <Text>{t('PAGES.AUTH.REGISTER.TEXTCODE.TEXT')}</Text>
                                <Text style={{ color: lightTheme.colors.primary, top: scale(5) }}>{email}</Text>
                            </Box>
                            <Box top={40}>
                                <Input
                                    type='code'
                                    placeholder={t('PAGES.AUTH.REGISTER.PLACEHOLDERPASSWORD')}
                                    value={code}
                                    onChangeText={setCode}
                                />
                            </Box>
                            <Box flex={6} alignItems='center' top={45}>
                                <Box right={16}>
                                    <Box flexDirection='row' alignItems='center'>
                                        <Text style={boldText}>{t('PAGES.AUTH.REGISTER.TEXTCODE.TEXTIMPORTANT.ONE')} </Text>
                                        <Text style={textSimple}>{t('PAGES.AUTH.REGISTER.TEXTCODE.TEXTIMPORTANT.TWO')} </Text>
                                        <Text style={boldText}>{t('PAGES.AUTH.REGISTER.TEXTCODE.TEXTIMPORTANT.THREE')} </Text>
                                        <Text style={textSimple}>{t('PAGES.AUTH.REGISTER.TEXTCODE.TEXTIMPORTANT.FOUR')} </Text>
                                    </Box>
                                    <Box flexDirection='row' alignItems='center'>
                                        <Text style={boldText}>{t('PAGES.AUTH.REGISTER.TEXTCODE.TEXTIMPORTANT.FIVE')} </Text>
                                        <Text style={textSimple}>{t('PAGES.AUTH.REGISTER.TEXTCODE.TEXTIMPORTANT.SIX')} </Text>
                                    </Box>
                                </Box>
                                <Box alignItems='center' flexDirection='row' top={15} justifyContent='center'>
                                    <Text style={textSimple}>{t('PAGES.AUTH.REGISTER.TEXTCODE.TEXTIMPORTANT.SEVEN')} </Text>
                                    <Text style={{ fontWeight: 'bold' }}>00:{countdown < 10 ? `0${countdown}` : countdown}s</Text>
                                </Box>
                            </Box>
                        </Box>
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

export { StepEmailToken };
