/**
 * @format
 */
import 'react-native-gesture-handler';

import React from 'react';
import {AppRegistry, LogBox} from 'react-native';
import App from './src/index';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {storeRedux} from 'store/storeRedux';

import './src/services/translate';
import './src/designs/Colors';

LogBox.ignoreAllLogs();

const RootApp = () => (
  <Provider store={storeRedux}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RootApp);
