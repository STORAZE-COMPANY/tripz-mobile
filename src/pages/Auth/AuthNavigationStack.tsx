
import React from 'react';
import { createStack } from '../../services/navigation';
import OnBoarding from './OnBoarding/OnBoarding';
// import Login from './Login/Login';
// import RecoveryNavigator from './Recovery/RecoveryStack';

// import Registration from './Registration/Registration';
// import TermsOfUse from './TermsOfUse/TermsOfUse';
// import {  Token } from './Recovery/Token&PasswordStep/Token';
// import OnBoarding  from './OnBoarding/OnBoarding';
// import { Password } from './Recovery/Token&PasswordStep/Password';
// import EmailStep from './Recovery/EmailStep';

const AuthNavigator = () => {
  const AuthStack = createStack();

  return (
    <AuthStack.Navigator
      screenOptions={{ headerShown: false, presentation: 'transparentModal' }} initialRouteName="OnBoarding" >

      <AuthStack.Screen name="OnBoarding" component={OnBoarding} />

    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
