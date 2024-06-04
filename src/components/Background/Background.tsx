import React from 'react';
import {  View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './style';

interface BackgroundProps {
  children: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#F5F6FF', '#D3E0FF']} 
        start={{ x: 0, y: 0 }} 
        end={{ x: 0, y: 1 }} 
        style={styles.gradient}
      >
        {children}
      </LinearGradient>
    </View>
  );
};


export default Background;
