/**
 * @format
 */
import 'react-native-gesture-handler';
if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}
import React from 'react';
import {AppRegistry, LogBox} from 'react-native';
import App from './src/index';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {storeRedux} from 'store/storeRedux';
import ErrorBoundary from 'react-native-error-boundary';

import './src/services/translate';
import './src/designs/Colors';
import FallbackError, {errorHandler} from 'components/FallbackError';

LogBox.ignoreAllLogs();

const RootApp = () => (
  <ErrorBoundary FallbackComponent={FallbackError} onError={errorHandler}>
    <Provider store={storeRedux}>
      <App />
    </Provider>
  </ErrorBoundary>
);

AppRegistry.registerComponent(appName, () => RootApp);
