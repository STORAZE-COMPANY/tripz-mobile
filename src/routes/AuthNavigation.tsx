import React from "react";
// import { OnBoarding } from "../pages/Auth/OnBoarding/OnBoarding";
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../pages/Auth/Login/Login";
import { StepEmail } from "../pages/Auth/Login/LoginEmail/StepOne/StepEmail";
import { StepPassword } from "../pages/Auth/Login/LoginEmail/StepTwo/StepPassword";
import { StepCode } from "../pages/Auth/Register/StepCode/StepCode";
import { StepDataUser } from "../pages/Auth/Register/StepDataUser/StepDataUser";
import { StepSetPassword } from "../pages/Auth/Register/StepSetPassword/StepSetPassword";
import { StepEmailPassword } from "../pages/Auth/Recovery/Email/StepEmailPassword";
import { StepEmailToken } from "../pages/Auth/Recovery/Token/StepEmailToken";
import { StepNewPassword } from "../pages/Auth/Recovery/NewPassword/StepNewPassword";

const AuthNavigation = () => {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator
      screenOptions={{ headerShown: false, presentation: "transparentModal" }}
      initialRouteName="Login"
    >
      {/* <AuthStack.Screen name="OnBoarding" component={OnBoarding} /> */}
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="StepEmail" component={StepEmail} />
      <AuthStack.Screen name="StepPassword" component={StepPassword} />
      <AuthStack.Screen name="StepSetPassword" component={StepSetPassword} />
      <AuthStack.Screen name="StepCode" component={StepCode} />
      <AuthStack.Screen name="StepDataUser" component={StepDataUser} />
      <AuthStack.Screen
        name="StepEmailPassword"
        component={StepEmailPassword}
      />
      <AuthStack.Screen name="StepEmailToken" component={StepEmailToken} />
      <AuthStack.Screen name="StepNewPassword" component={StepNewPassword} />
    </AuthStack.Navigator>
  );
};

export { AuthNavigation };
