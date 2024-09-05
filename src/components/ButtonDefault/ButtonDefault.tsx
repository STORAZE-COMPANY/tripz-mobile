import React from 'react';
import { TouchableOpacity, Text, ViewStyle, TextStyle, View } from 'react-native';
import { Box } from '../Box';
import { useWindow } from '@mobile/hooks/windowHook';
import { lightTheme } from '@mobile/theme';
import { fonts, latoTypography } from '@mobile/utils/typograph';
import { styles } from './styles';
import { IStyleProps } from '@mobile/utils/stylesProps';
import ChevronRightIcon from '@mobile/assets/chevronRight.svg'; // Importe seu ícone SVG
import { scale } from '@mobile/utils/resize';

interface ButtonDefaultProps extends IStyleProps {
    text: string;
    onPress: () => void;
    icon?: React.ReactNode; // Adicionando a prop de ícone como ReactNode
    iconPosition?: 'left' | 'right'; // Posição do ícone
    iconSpacing?: number; // Espaçamento entre o ícone e o texto
    disabled?: boolean; // Prop para desativar o botão
}

const ButtonDefault: React.FC<ButtonDefaultProps> = ({
    text,
    backgroundColor,
    onPress,
    width,
    height,
    color,
    top,
    bottom,
    borderRadius,
    icon,
    iconPosition = 'right', // Posição padrão do ícone é à direita
    iconSpacing = 8, // Espaçamento padrão entre ícone e texto
    disabled = false, // Prop padrão desativada
}) => {
    const { heightScale, widthScale } = useWindow();

    const buttonStyles: IStyleProps = {
        ...styles.button,
        width: width && scale(width),
        height: height && scale(height), 
        backgroundColor: disabled ? '#DEDEDE' : backgroundColor || lightTheme.colors.primary, // Cor do botão desativado
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: borderRadius ? scale(borderRadius) : scale(1),
        top: top ? scale(top) : 0,
        bottom: bottom ? scale(bottom) : 0,
        flexDirection: 'row', 
        opacity: disabled ? 1 : 1, // Deixa o botão levemente translúcido quando desativado
     

    };

    const textStyles: TextStyle = {
        fontSize: fonts.fontSizeMediumSmall.fontSize,
        fontWeight: latoTypography.fontWeightSemiBold.fontWeight,
        fontFamily: latoTypography.fontFamilyBold.fontFamily,
        color: disabled ? '#A0A0A0': color || 'white', // Cor do texto desativado
    };

    const iconStyles: ViewStyle = {
        marginLeft: iconPosition === 'right' ? iconSpacing : 70,
        marginRight: iconPosition === 'left' ? iconSpacing : 0,
    };

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyles} disabled={disabled}>
            <Box justifyContent='center' alignItems='center' flexDirection='row' >
                <Text style={textStyles}>{text}</Text>
                {icon && <Box style={iconStyles} left={1}>{icon}</Box>}
            </Box>
        </TouchableOpacity>
    );
};

export { ButtonDefault };
