import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Root from 'navigations/root';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StyleSheet, StatusBar} from 'react-native';
import {getNavigationTheme, getThemeStatusBarStyle} from 'designs/Colors';
import {useSelector} from 'react-redux';
import {RootState} from 'store/storeRedux';

export default function App() {
  const theme = useSelector((state: RootState) => state.theme);

  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar barStyle={getThemeStatusBarStyle()} />
      <NavigationContainer theme={getNavigationTheme(theme.mode)}>
        <Root />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
