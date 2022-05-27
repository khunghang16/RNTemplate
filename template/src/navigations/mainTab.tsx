import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from 'modules/home';
import Setting from 'modules/setting';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Setting} />
    </Tab.Navigator>
  );
};

export default MainTab;
