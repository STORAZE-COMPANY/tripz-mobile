import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/MainNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const AppContent = () => {
  return (
  <SafeAreaProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
      </SafeAreaProvider>
  );
};

export default AppContent;
