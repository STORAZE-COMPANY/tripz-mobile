import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainNavigation from './src/MainNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Lato_400Regular, Lato_700Bold} from '@expo-google-fonts/lato';
import {Poppins_500Medium ,Poppins_400Regular, Poppins_600SemiBold, Poppins_300Light } from '@expo-google-fonts/poppins';
import './src/i18n';
import { useTranslation } from 'react-i18next';
import { AppProvider } from '@mobile/context';
export default function App() {
  const { t } = useTranslation();

  const [fontLoaded, fontError] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
 
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  
  });

  return (
    <AppProvider>
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
       {fontLoaded ? <MainNavigation /> :   <ActivityIndicator size="large" color="#0000ff" /> }
      </NavigationContainer>
    </SafeAreaProvider>
    </AppProvider>
  );
}


