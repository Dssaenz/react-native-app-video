import React from 'react';
import {LoginScreen, RegisterScreen} from '../screens';

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
      <AuthStack.Screen
        name={'Register'}
        component={RegisterScreen}
        options={{header: () => null}}
      />
    </AuthStack.Navigator>
  );
}

export default AuthStackNavigator;
