import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigation from './pages/Auth/AuthNavigation';
import Splash from './pages/Splash';

// import ContentNavigation from './ContentNavigation';

const MainStack = createStackNavigator();



const MainNavigation = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Splash'>
      {/* {isAuthenticated ? ( */}
        {/* <MainStack.Screen name="Content" component={ContentNavigation} /> */}
      {/* ) : ( */}
      <MainStack.Screen   name="Splash" component={Splash} />
        <MainStack.Screen name="Auth" component={AuthNavigation} />
      {/* )} */}
    </MainStack.Navigator>
  );
};

export default MainNavigation;
