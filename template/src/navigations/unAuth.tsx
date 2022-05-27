import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from 'modules/unAuth/login';
import Intro from 'modules/unAuth/intro';
import {useLocalData} from 'store/localData';
const Stack = createNativeStackNavigator();

interface Props {
  onLogin: (token: string) => void;
}

const UnAuth = ({onLogin}: Props) => {
  const {data: isIntro} = useLocalData({key: 'intro', defaultData: ''});
  return (
    <Stack.Navigator
      initialRouteName={!isIntro ? 'Intro' : 'Login'}
      screenOptions={{
        headerShadowVisible: false,
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="Login">
        {props => <Login {...props} onLogin={onLogin} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default UnAuth;
