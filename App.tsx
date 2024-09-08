import "./src/i18n";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";

import { ActivityIndicator } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

import { Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato";
import {
  Poppins_500Medium,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_300Light,
} from "@expo-google-fonts/poppins";

import { AppProvider } from "@contexts/AppContext";
import { MainNavigation } from "@routes/MainNavigation";
import { lightTheme } from "@theme/colors/lightTheme";

export default function App() {
  const [fontLoaded] = useFonts({
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
          {fontLoaded ? (
            <MainNavigation />
          ) : (
            <ActivityIndicator size="large" color={lightTheme.colors.primary} />
          )}
        </NavigationContainer>
      </SafeAreaProvider>
    </AppProvider>
  );
}
