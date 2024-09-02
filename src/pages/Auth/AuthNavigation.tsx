import React from 'react';
import {OnBoarding} from './OnBoarding/OnBoarding';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from './Login/Login';
import { StepEmail } from './Login/LoginEmail/StepOne/StepEmail';
import { StepPassword } from './Login/LoginEmail/StepTwo/StepPassword';
import { StepCode } from './Register/StepCode/StepCode';
import { StepDataUser } from './Register/StepDataUser/StepDataUser';
import { StepSetPassword } from './Register/StepSetPassword/StepSetPassword';
import { StepEmailPassword } from './Recovery/Email/StepEmailPassword';
import { StepEmailToken } from './Recovery/Token/StepEmailToken';
import { StepNewPassword } from './Recovery/NewPassword/StepNewPassword';

const AuthNavigation = () => {
    const AuthStack = createStackNavigator();

    return (
        <AuthStack.Navigator
            screenOptions={{ headerShown: false, presentation: 'transparentModal' }}
            initialRouteName="OnBoarding" >
            <AuthStack.Screen name="OnBoarding" component={OnBoarding} />
            <AuthStack.Screen name="Login" component={Login} />
            <AuthStack.Screen name="StepEmail" component={StepEmail} />
            <AuthStack.Screen name="StepPassword" component={StepPassword} />
            <AuthStack.Screen name="StepSetPassword" component={StepSetPassword} />
            <AuthStack.Screen name="StepCode" component={StepCode} />
            <AuthStack.Screen name="StepDataUser" component={StepDataUser} />
            <AuthStack.Screen name="StepEmailPassword" component={StepEmailPassword} />
            <AuthStack.Screen name="StepEmailToken" component={StepEmailToken} />
            <AuthStack.Screen name="StepNewPassword" component={StepNewPassword} />
            
        
        </AuthStack.Navigator>
    );
};

export { AuthNavigation };
