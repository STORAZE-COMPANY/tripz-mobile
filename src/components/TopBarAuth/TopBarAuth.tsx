import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native';
import Arrow from '@mobile/assets/shape.svg';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import {Box} from '../Box';

interface TopBarProps {
  titleText: string;
  currentStep: number;
  totalSteps: number;
}

const TopBarComponent: React.FC<TopBarProps> = ({ titleText, currentStep, totalSteps }) => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <Box flexDirection='row' justifyContent='space-between' pdVertical={10} alignItems='center' pdHorizontal={10}>
      <TouchableOpacity onPress={goBack}>
        <Arrow />
      </TouchableOpacity>
      <Text style={styles.title}>{titleText}</Text>
      <Text style={styles.stepCount}>{`${currentStep}/${totalSteps}`}</Text>
    </Box>
  );
};


export {TopBarComponent};
