import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface BackgroundProps {
  children: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#F5F6FF', '#D3E0FF']} // Gradiente azul claro para branco
        start={{ x: 0, y: 0 }} // Início do gradiente
        end={{ x: 0, y: 1 }} // Fim do gradiente
        style={styles.gradient}
      >
        {children}
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Background;
