import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {AuthNavigation} from './pages/Auth/AuthNavigation';
import Splash from './pages/Splash';

const MainStack = createStackNavigator();

const MainNavigation = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Splash'>
      <MainStack.Screen   name="Splash" component={Splash} />
        <MainStack.Screen name="Auth" component={AuthNavigation} />
    </MainStack.Navigator>
  );
};

export default MainNavigation;
