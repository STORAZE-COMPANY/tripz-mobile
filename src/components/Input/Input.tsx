import React, { useState } from 'react';
import { TextInput, Text, View, StyleSheet, TouchableOpacity, FlatList, TextInputProps, Modal, Dimensions } from 'react-native';
import { Box } from '../Box/Box';
import { lightTheme } from '@mobile/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Fontisto';
import WarningIcon from 'react-native-vector-icons/MaterialIcons';
import EyeIcon from '@mobile/assets/eye.svg';
import EyeClosed from '@mobile/assets/eyeclose.svg';
import { fonts, poppinsTypography } from '@mobile/utils/typograph';
import { use } from 'i18next';
import { styles } from './styles';
import { useWindow } from '@mobile/hooks/windowHook';

interface InputProps extends TextInputProps {
    label?: string;
    placeholder?: string;
    type?: 'text' | 'password' | 'code' | 'dropdown';
    strengthBars?: boolean;
    options?: string[];
    onSelect?: (value: string) => void;
    icon?: string;
    height?: number;
    width?: number;

}

const Input = ({
    label,
    placeholder,
    type = 'text',
    strengthBars = false,
    options = [],
    onSelect = () => { },
    icon,
    height,
    width,
    ...rest
}: InputProps) => {
    const [value, setValue] = useState("")
    const [inputValue, setInputValue] = useState(value);
    const [showDropdown, setShowDropdown] = useState(false);
    const [secureText, setSecureText] = useState(type === 'password');
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('false');
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

    const handleSelect = (option: string) => {
        setInputValue(option);
        onSelect(option);
        setShowDropdown(false);
    };

    const handleTextChange = (text: string) => {
        setInputValue(text);
        if (rest.onChangeText) {
            rest.onChangeText(text);
        }
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
        const colors = [lightTheme.colors.strengthBarsColor1, lightTheme.colors.strengthBarsColor2,lightTheme.colors.strengthBarsColor3];
        const labels = ['Fraca', 'Média', 'Boa', 'Ótima!'];
    
        let bars = Array(4).fill({ backgroundColor: lightTheme.colors.strengthBarsColor0 });
    
        if (inputValue.length === 0) {
            // Nenhum caractere digitado, todas as barras ficam cinza
            bars = Array(4).fill({ backgroundColor: lightTheme.colors.strengthBarsColor0});
        } else if (inputValue.length < 8) {
            // Menos de 8 caracteres, apenas uma barra vermelha
            bars[0] = { backgroundColor: lightTheme.colors.strengthBarsColor1 };
        } else {
            // 8 ou mais caracteres, barras variam conforme a força da senha
            bars = bars.map((_, index) => ({
                backgroundColor: index < strength ? colors[Math.min(strength - 1, 2)] : lightTheme.colors.strengthBarsColor0,
            }));
        }
    
        const label = inputValue.length === 0 ? '' : (inputValue.length < 8 ? labels[0] : labels[Math.min(strength - 1, 3)]);
        const color = inputValue.length < 8 ? lightTheme.colors.strengthBarsColor1 : colors[Math.min(strength - 1, 2)];
        const showIcon = inputValue.length > 0 && (label === 'Fraca' || label === 'Média');

       const handleIconPress = (event: any) => {
            const { pageX, pageY } = event.nativeEvent;
            const screenWidth = Dimensions.get('window').width;
            const tooltipWidth = 300; // Largura fixa do tooltip
            const adjustedX = pageX + tooltipWidth > screenWidth ? screenWidth - tooltipWidth - 20 : pageX;

           
            setTooltipPosition({ x: adjustedX, y: pageY });
            if (label === 'Fraca') {
                setModalMessage('Sua senha é muito fácil de adivinhar. Tente adicionar caracteres diferentes.');
            } else if (label === 'Média') {
                setModalMessage('Sua senha continua fácil de adivinhar. Adicione mais caracteres diferentes.');
            }
            setModalVisible(true);
        };

        return (
            <>
                <View style={styles.strengthContainer}>
                    {bars.map((bar, index) => (
                        <View
                            key={index}
                            style={[
                                styles.strengthBar,
                                { backgroundColor: bar.backgroundColor },
                            ]}
                        />
                    ))}
                </View>
                {inputValue.length > 0 && (
                    <Box flexDirection='row' justifyContent='flex-end' alignItems='center'>
                        <Text style={[styles.strengthLabel, { color }]}>{label}</Text>
                        {showIcon && (
                            <TouchableOpacity onPress={handleIconPress}>
                                <WarningIcon name="error-outline" size={20} color={color} />
                            </TouchableOpacity> )}
                    </Box>
                    
                )}
                {modalVisible && (
                    <Modal
                        transparent={true}
                        animationType="none"
                        visible={modalVisible}
                        onRequestClose={() => setModalVisible(false)}
                    >
                        <TouchableOpacity style={styles.modalOverlay} onPress={() => setModalVisible(false)}>
                            <View style={[styles.tooltipContainer, { top: tooltipPosition.y, left: tooltipPosition.x }]}>
                            <View style={styles.tooltipArrow} />
                                <Text style={styles.tooltipText}>{modalMessage}</Text>
                               
                            </View>
                        </TouchableOpacity>
                    </Modal>
                )}
            </>
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
                    {icon && <Icon2 name={icon} size={20} color={lightTheme.colors.iconWorldColor} style={styles.icon} />}
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
            <Box flexDirection='row' width={width} height={height} alignItems='center'>
                {type === 'code' ? (
                    renderCodeInput()
                ) : type === 'dropdown' ? (
                    renderDropdown()
                ) : (
                    <View style={[styles.inputWrapper, { width, height }]}>
                        <TextInput
                            {...rest}
                            style={styles.inputText}
                            placeholder={placeholder}
                            placeholderTextColor={'gray'}
                            secureTextEntry={type === 'password' && secureText}
                            onChangeText={handleTextChange}
                        />
                        {type === 'password' && (
                            <TouchableOpacity
                              
                                onPress={() => setSecureText(!secureText)}
                            >
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
