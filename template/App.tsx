import React from 'react';
import {StyleSheet} from 'react-native';
import Root from './src';
import {Provider} from 'react-redux';
import {persistor, storeRedux} from 'store/storeRedux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {PersistGate} from 'redux-persist/integration/react';

const App = React.memo(() => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Provider store={storeRedux}>
        <PersistGate loading={null} persistor={persistor}>
          <Root />
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
});

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
