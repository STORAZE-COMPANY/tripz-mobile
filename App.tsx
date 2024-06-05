import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainNavigation from './src/MainNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Lato_100Thin_Italic, Lato_300Light, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import './src/i18n';
import { useTranslation } from 'react-i18next';
export default function App() {
  const { t } = useTranslation();
  const [fontLoaded, fontError] = useFonts({
    Lato_300Light,
    Lato_700Bold,
    Lato_400Regular,
  
  });
/*
  if (!fontLoaded || fontError) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    );
  }*/

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
       {fontLoaded ? <MainNavigation /> :   <ActivityIndicator size="large" color="#0000ff" /> }
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
