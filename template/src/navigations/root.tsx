import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from 'modules/splash';
import UnAuth from './unAuth';
import Auth from './auth';
import {RootStackParamList} from './types';
const Stack = createNativeStackNavigator<RootStackParamList>();

const Root = () => {
  const [isReady, setIsReady] = React.useState(false);
  const [token, setToken] = React.useState('');

  const onLoadSplash = () => {
    setIsReady(true);
  };

  const onLogin = (value: string) => {
    setToken(value);
  };

  return (
    <Stack.Navigator
      defaultScreenOptions={{
        headerShadowVisible: false,
        headerBackTitleVisible: false,
      }}>
      {/* {!isReady ? (
        <Stack.Screen name="Spash">
          {props => <Splash {...props} onLoadSplash={onLoadSplash} />}
        </Stack.Screen>
      ) : !token ? (
        <Stack.Screen
          name="UnAuth"
          options={{
            headerShown: false,
          }}>
          {props => <UnAuth {...props} onLogin={onLogin} />}
        </Stack.Screen>
      ) : (
        (() => Auth())()
      )} */}
      {(() => Auth())()}
    </Stack.Navigator>
  );
};

export default Root;
