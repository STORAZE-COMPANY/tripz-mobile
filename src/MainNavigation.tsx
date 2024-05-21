import React, { useEffect } from 'react';
import { createStack } from './services/navigation';
import AuthNavigator from './pages/Auth/AuthNavigationStack';



const MainNavigator = () => {
  const MainStack = createStack();


  return (
    <MainStack.Navigator
      initialRouteName={'Start'}
      screenOptions={{ headerShown: false}}
    >
      <MainStack.Screen name="Start" component={AuthNavigator} />
      {/* <MainStack.Screen name="Content" component={ContentNavigator} /> */}
    </MainStack.Navigator>
  );
};

export default MainNavigator;
