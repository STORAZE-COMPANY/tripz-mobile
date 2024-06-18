import React, { useState } from 'react';
import { TextInput, Text, View, StyleSheet, TouchableOpacity, FlatList, TextInputProps } from 'react-native';
import { Box } from '../Box/Box';
import { lightTheme } from '@mobile/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Fontisto';
import EyeIcon from '@mobile/assets/eye.svg';
import EyeClosed from '@mobile/assets/eyeclose.svg';
import { fonts, poppinsTypography } from '@mobile/utils/typograph';
import { use } from 'i18next';
import { styles } from './styles';

interface InputProps extends TextInputProps{
    label?: string;
    placeholder?: string;
    type?: 'text' | 'password' | 'code' | 'dropdown';
    strengthBars?: boolean;
    options?: string[];
    onSelect?: (value: string) => void;
    icon?: string;

width?: number ;

}

const Input = ({
    label,
    placeholder,
    type = 'text',
    strengthBars = false,
    options = [],
    onSelect = () => { },
    icon,
width,
    ...rest
}: InputProps) => {
    const [value, setValue] = useState("")
     const [inputValue, setInputValue] = useState(value);
    const [showDropdown, setShowDropdown] = useState(false);
    const [secureText, setSecureText] = useState(type === 'password');

    const handleSelect = (option: string) => {
        setInputValue(option);
        onSelect(option);
        setShowDropdown(false);
    };

    const calculateStrength = (password: string) => {
        let strength = 0;
        if (password.length >= 8) strength += 1;
        if (/[A-Z]/.test(password)) strength += 1;
        if (/[0-9]/.test(password)) strength += 1;
        if (/[^A-Za-z0-9]/.test(password)) strength += 1;
        return strength;
    };

    const renderStrengthBars = () => {
        const strength = calculateStrength(inputValue);
        return (
            <View style={styles.strengthContainer}>
                {[...Array(4)].map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.strengthBar,
                            {
                                backgroundColor: index < strength ? '#4CAF50' : '#BCBCBC',
                            },
                        ]}
                    />
                ))}
            </View>
        );
    };

    const renderCodeInput = () => {
        return (
            <View style={styles.codeContainer}>
                {[...Array(4)].map((_, index) => (
                    <View key={index} style={styles.codeInputWrapper}>
                        <TextInput
                            style={styles.codeInput}
                            maxLength={1}
                            keyboardType="numeric"
                            onChangeText={(text) => handleCodeChange(text, index)}
                            placeholder='___'
                            placeholderTextColor={lightTheme.colors.disableColor}
                        />
                    </View>
                ))}
            </View>
        );
    };

    const handleCodeChange = (text: string, index: number) => {
        const newInputValue = inputValue.split('');
        newInputValue[index] = text;
        handleTextChange(newInputValue.join(''));
    };

    const renderDropdown = () => {
        return (
            <View style={styles.dropdownContainer}>
                <TouchableOpacity activeOpacity={2} style={styles.dropdown} onPress={() => setShowDropdown(!showDropdown)}>
                    {icon && <Icon2 name={icon} size={20} color="#A0A0A0" style={styles.icon} />}
                    <Text style={styles.dropdownText}>{inputValue || placeholder}</Text>
                    <Icon name="keyboard-arrow-down" size={20} color="black" />
                </TouchableOpacity>
                {showDropdown && (
                    <View style={styles.dropdownList}>
                        <FlatList
                            data={options}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={styles.dropdownItem} onPress={() => handleSelect(item)}>
                                    <Text>{item}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                )}
            </View>
        );
    };

    return (
        <Box >
            {label && <Text style={styles.label}>{label}</Text>}
            <Box flexDirection='row' width={width} alignItems='center'>
                {type === 'code' ? (
                    renderCodeInput()
                ) : type === 'dropdown' ? (
                    renderDropdown()
                ) : (
                    <View style={styles.inputWrapper}>
                        <TextInput
                            {...rest}
                            style={styles.inputText}
                            placeholder={placeholder}
                            placeholderTextColor={'gray'}
                            secureTextEntry={type === 'password' && secureText}

                        />
                        {type === 'password' && (
                            <TouchableOpacity onPress={() => setSecureText(!secureText)}>
                                {secureText ? <EyeClosed width={20} height={20} /> : <EyeIcon width={20} height={20} />}
                            </TouchableOpacity>
                        )}
                    </View>
                )}
            </Box>
            {type === 'password' && strengthBars && renderStrengthBars()}
        </Box>
    );
}


export { Input };
