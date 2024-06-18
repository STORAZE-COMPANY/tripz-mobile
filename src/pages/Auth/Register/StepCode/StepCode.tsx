import React, { useEffect, useState } from 'react';
import { Text} from 'react-native';
import { Background } from '@mobile/components/Background';
import { Box } from '@mobile/components/Box';
import { ButtonDefault } from '@mobile/components/ButtonDefault';
import { Input } from '@mobile/components/Input';
import { TopBarComponent } from '@mobile/components/TopBarAuth';
import { lightTheme } from '@mobile/theme';
import { useNavigation, useRoute } from '@react-navigation/native';
import { t } from 'i18next';
import { fonts, latoTypography, poppinsTypography } from '@mobile/utils/typograph';

const StepCode: React.FC = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');

    // Recebe o email passado como parâmetro de navegação
    useEffect(() => {
        if (route.params && route.params.email) {
            setEmail(route.params.email);
        }
    }, [route.params]);

    const handleNextStep = async () => {
      
     navigation.navigate("StepSetPassword", { email })
    console.log(email)
      
    };

    const backgroundStyle = {
        gradient1: lightTheme.colors.gradientBackgroundColorOne,
        gradient2: lightTheme.colors.gradientBackgroundColorTwo
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
    }

    return (
        <Background {...backgroundStyle}>
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
        </Background>
    );
};

export { StepCode };
