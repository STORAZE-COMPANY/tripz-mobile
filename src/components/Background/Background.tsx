import React from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './style';
import { IStyleProps } from '@mobile/utils/stylesProps';

interface IBackGroundProps extends IStyleProps {
  gradient1: string;
  gradient2: string;
  gradient3?: string; 
}

const Background: React.FC<IBackGroundProps> = ({ children, height, gradient1, gradient2, gradient3 }) => {

  const backGroundStyles = {
    ...styles.container,
  };
  const backGroundGradientStyles = {
    ...styles.gradient
  };

  const colors = gradient3 ? [gradient3, gradient1, gradient2, gradient3] : [gradient1, gradient2];

  return (
    <View style={backGroundStyles}>
      <LinearGradient
        colors={colors}
        start={{ x: 0.5, y: 0 }} 
        end={{ x: 0.5, y: 1 }}   
        style={backGroundGradientStyles}
        locations={gradient3 ? [0, 0.5, 0.5, 1] : [0, 1]} 
      >
        {children}
      </LinearGradient>
    </View>
  );
};

export { Background };
