import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from 'modules/home';
import Setting from 'modules/setting';
import {useTranslation} from 'react-i18next';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  const {t} = useTranslation();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: t('home.title'),
        }}
      />
      <Tab.Screen name="Settings" component={Setting} />
    </Tab.Navigator>
  );
};

export default MainTab;
