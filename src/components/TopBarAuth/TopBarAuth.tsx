// src/components/TopBarComponent.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native';
import Arrow from '../../../assets/shape.svg'; // Substitua pelo caminho do seu arquivo SVG
import { useNavigation } from '@react-navigation/native';

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
    <View style={[styles.container, { width }]}>
      <TouchableOpacity onPress={goBack}>
        <Arrow />
      </TouchableOpacity>
      <Text style={styles.title}>{titleText}</Text>
      <Text style={styles.stepCount}>{`${currentStep}/${totalSteps}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  stepCount: {
    fontSize: 16,
    color:'grey'
  },
});

export default TopBarComponent;
