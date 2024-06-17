import React from 'react';
import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';
import {Box} from '../Box/Box';
import { Text } from 'react-native'; 
import { IStyleProps } from '@mobile/utils/stylesProps';
interface InputProps extends IStyleProps{
    label?: string;
    placeholder?: string;
}

function Input(props: InputProps) {
    const { placeholder } = props;

    const inputStyles = {
        ...styles.inputText,
    }
    const labelSytles = {
        ...styles.Label,
    }

    const isLabel = props.label && <Text style={labelSytles}>{props.label}</Text>
    
    return (
        <Box>
            {isLabel}
            <Box flexDirection='row' alignItems='center'>
                <TextInput
                    style={inputStyles}
                    placeholder={placeholder}
                    placeholderTextColor={'#A0A0A0'}
                />
            </Box>
        </Box>
    );
}

export { Input };