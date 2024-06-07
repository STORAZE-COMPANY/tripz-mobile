import React, { useState } from 'react';
import { TextInput, Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Box } from '../Box/Box';
import { IStyleProps } from '@mobile/utils/stylesProps';
import { lightTheme } from '@mobile/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Fontisto';
import { fonts, poppinsTypography } from '@mobile/utils/typograph';

interface InputProps extends IStyleProps {
    label?: string;
    placeholder?: string;
    type?: 'text' | 'password' | 'code' | 'dropdown';
    value?: string;
    onChange?: (value: string) => void;
    strengthBars?: boolean;
    options?: string[];
    onSelect?: (value: string) => void;
    icon?: string;
}

const Input: React.FC<InputProps> = ({
    label,
    placeholder,
    type = 'text',
    value = '',
    onChange = () => { },
    strengthBars = false,
    options = [],
    onSelect = () => { },
    icon,
    ...rest
}) => {
    const [inputValue, setInputValue] = useState(value);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleTextChange = (text: string) => {
        setInputValue(text);
        onChange(text);
    };

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
                                backgroundColor: index < strength ? '#4CAF50' : '#E0E0E0',
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
                        <View style={styles.underline} />
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
        <Box {...rest}>
            {label && <Text style={styles.label}>{label}</Text>}
            <Box flexDirection='row' alignItems='center'>
                {type === 'code' ? (
                    renderCodeInput()
                ) : type === 'dropdown' ? (
                    renderDropdown()
                ) : (
                    <TextInput
                        style={styles.inputText}            
                        placeholder={placeholder}
                        placeholderTextColor={'#A0A0A0'}
                        secureTextEntry={type === 'password'}
                        value={inputValue}
                        onChangeText={handleTextChange}
                    />
                )}
            </Box>
            {type === 'password' && strengthBars && renderStrengthBars()}
        </Box>
    );
};

const styles = StyleSheet.create({
    label: {
        fontSize: fonts.fontSizeMediumLSmall.fontSize,
        color: lightTheme.colors.textDefault,
        fontFamily: poppinsTypography.fontFamilyRegular.fontFamily,
        lineHeight: poppinsTypography.lineHeightNormal.lineHeight,
      
        
    },
    inputText: {
        height: 45,
        elevation: 5,
        shadowColor: 'gray',
        padding: 8,
        borderRadius: 7,
        flex: 1,
        backgroundColor: lightTheme.colors.inputColor,
        bottom: 1,      
    },
    strengthContainer: {
        flexDirection: 'row',
        marginTop: 8,
    },
    strengthBar: {
        height: 4,
        flex: 1,
        marginHorizontal: 2,
    },
    codeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    codeInputWrapper: {
        alignItems: 'center',
        flex: 1,
        marginHorizontal: 5,
    },
    codeInput: {
        height: 40,
        width: 40,
        shadowColor: '#000',
        shadowOpacity: 40,
        shadowRadius: 4,
        textAlign: 'center',
        borderRadius: 4,
        position: 'relative',
        backgroundColor: '#fff',
    },
    underline: {
        position: 'absolute',
        bottom: -10,
        left: 0,
        right: 0,
        height: 2,
        backgroundColor: '#E0E0E0',
    },
    dropdownContainer: {
        flex: 1,
        position: 'relative',
    },
    dropdown: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 0.7,
        padding: 10,
        borderRadius: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff',
    },
    dropdownText: {
        flex: 1,
        marginLeft: 8,
    },
    dropdownList: {
        position: 'absolute',
        top: 45,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        borderWidth: 0.3,
        borderColor: '#ccc',
        borderRadius: 4,
        zIndex: 1000,
    },
    dropdownItem: {
        padding: 10,
    },
    icon: {
        marginRight: 10,
    },
});

export { Input };
