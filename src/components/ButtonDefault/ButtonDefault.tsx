import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle, ColorValue } from 'react-native';
import { Box } from '../Box';
import { useWindow } from '@mobile/hooks/windowHook';
import { lightTheme } from '@mobile/theme';
import { fonts, latoTypography } from '@mobile/utils/typograph'
import { styles } from './styles';
import { IStyleProps } from '@mobile/utils/stylesProps';

interface ButtonDefaultProps extends IStyleProps {
    text: string;
    onPress: () => void;
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
    borderRadius
}) => {
    const { heightScale ,widthScale} = useWindow();

    const buttonStyles: IStyleProps = {
        ...styles.button,
        width: width && widthScale(width),
        height: height && heightScale(height), 
        backgroundColor: backgroundColor || lightTheme.colors.primary, 
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: borderRadius ? heightScale(borderRadius) : heightScale(1),
        top: top ? widthScale(top) : 0,
        bottom: bottom ? widthScale(bottom) : 0,
    };

    const textStyles: TextStyle = {
        fontSize: fonts.fontSizeMediumSmall.fontSize,
        fontWeight: latoTypography.fontWeightSemiBold.fontWeight,
        fontFamily: latoTypography.fontFamilyBold.fontFamily,
        color: color && color
    };

    return (
      
            <TouchableOpacity onPress={onPress} style={buttonStyles}>
                <Text style={textStyles}>{text}</Text>
            </TouchableOpacity>
       
    );
};


export { ButtonDefault };
