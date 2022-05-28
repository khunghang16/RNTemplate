import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTab from './mainTab';
import HomeModal from 'modules/home/modal/HomeModal';
const Stack = createNativeStackNavigator();

const Auth = () => {
  return (
    <>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{headerShown: false}}
      />
      <Stack.Group
        screenOptions={{
          presentation: 'fullScreenModal',
          headerShadowVisible: false,
          headerBackTitleVisible: false,
        }}>
        <Stack.Screen name="HomeModal" component={HomeModal} />
      </Stack.Group>
    </>
  );
};

export default Auth;
