import React from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './style';
import { IStyleProps } from '@mobile/utils/stylesProps';

const Background: React.FC<IStyleProps> = ({ children, height }) => {

  const backGroundStyles = {
    ...styles.container,
  }
  const backGroundGradientStyles = {
    ...styles.gradient
  }

  return (
    <View style={backGroundStyles}>
      <LinearGradient
        colors={['#F5F6FF', '#D3E0FF']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={backGroundGradientStyles}
      >
        {children}
      </LinearGradient>
    </View>
  );
};


export { Background };
