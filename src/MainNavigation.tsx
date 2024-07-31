import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {AuthNavigation} from './pages/Auth/AuthNavigation';
import Splash from './pages/Splash';
import {ContentNavigator} from './pages/Content/ContentNavigation';



const MainNavigation = () => {
  const MainStack = createStackNavigator();
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Content'>
      <MainStack.Screen   name="Splash" component={Splash} />
        <MainStack.Screen name="Auth" component={AuthNavigation} />
        <MainStack.Screen name="Content" component={ContentNavigator} />
    </MainStack.Navigator>
  );
};

export default MainNavigation;
