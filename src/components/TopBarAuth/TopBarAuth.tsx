import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native';
import Arrow from '@mobile/assets/shape.svg';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { Box } from '../Box';

interface TopBarProps {
  titleText: string;
  currentStep: number;
  totalSteps: number;
}

const TopBarComponent: React.FC<TopBarProps> = ({ titleText, currentStep, totalSteps }) => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  const titleTop = {
    ...styles.title,
  }

  const stepCount = {
    ...styles.stepCount
  }

  return (
    <Box flexDirection='row' justifyContent='space-between' pdTop={35} alignItems='center' pdHorizontal={10} width={343}>
      <TouchableOpacity onPress={goBack}>
        <Arrow />
      </TouchableOpacity>
      <Text style={titleTop}>{titleText}</Text>
      <Text style={stepCount}>{`${currentStep}/${totalSteps}`}</Text>
    </Box>
  );
};


export { TopBarComponent };
