import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTab from './mainTab';
const Stack = createNativeStackNavigator();

const Auth = () => {
  return (
    <>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{headerShown: false}}
      />
    </>
  );
};

export default Auth;
