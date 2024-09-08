import { createStackNavigator } from "@react-navigation/stack";
import { AuthNavigation } from "./AuthNavigation";
import Splash from "../pages/Splash";
import { ContentNavigator } from "./ContentNavigation";

export const MainNavigation = () => {
  const MainStack = createStackNavigator();
  return (
    <MainStack.Navigator
      initialRouteName="AuthNavigation"
      screenOptions={{ headerShown: false }}
    >
      <MainStack.Screen name="Splash" component={Splash} />
      <MainStack.Screen name="Auth" component={AuthNavigation} />
      <MainStack.Screen name="Content" component={ContentNavigator} />
    </MainStack.Navigator>
  );
};
