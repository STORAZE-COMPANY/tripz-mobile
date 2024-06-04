import React from 'react';
import {OnBoarding} from './OnBoarding/OnBoarding';
import { createStackNavigator } from '@react-navigation/stack';
import {Login} from './Login/Login';
import {Register} from './Register/Register';

const AuthNavigation = () => {
    const AuthStack = createStackNavigator();

    return (
        <AuthStack.Navigator
            screenOptions={{ headerShown: false, presentation: 'transparentModal' }}
            initialRouteName="OnBoarding" >
            <AuthStack.Screen name="OnBoarding" component={OnBoarding} />
            <AuthStack.Screen name="Login" component={Login} />
            <AuthStack.Screen name="Register" component={Register} />
        </AuthStack.Navigator>
    );
};

export { AuthNavigation };
