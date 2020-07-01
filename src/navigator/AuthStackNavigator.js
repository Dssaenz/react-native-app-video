import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

import {createStackNavigator} from '@react-navigation/stack';

const AuthStack = createStackNavigator();

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator initialRouteName={'Login'}>
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{header: () => null}}
      />
      <AuthStack.Screen name={'Register'} component={RegisterScreen} />
    </AuthStack.Navigator>
  );
}

export default AuthStackNavigator;
