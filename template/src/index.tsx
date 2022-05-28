import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Root from 'navigations/root';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StyleSheet, StatusBar} from 'react-native';
import {
  getNavigationTheme,
  getThemeStatusBarStyle,
  getBgStatusBarStyle,
} from 'designs/Colors';
import {useSelector} from 'react-redux';
import {RootState} from 'store/storeRedux';
import ModalGlobal from 'components/ModalGlobal';
import RNBootSplash from 'react-native-bootsplash';
import {View} from 'react-native-ui-lib';

export default function App() {
  const theme = useSelector((state: RootState) => state.theme);

  return (
    <GestureHandlerRootView style={styles.container}>
      <View bg-bgColor flex>
        <StatusBar
          barStyle={getThemeStatusBarStyle()}
          translucent={true}
          backgroundColor={getBgStatusBarStyle()}
        />
        <NavigationContainer
          theme={getNavigationTheme(theme.mode)}
          onReady={() => {
            RNBootSplash.hide({fade: true});
          }}>
          <Root />
        </NavigationContainer>
        <ModalGlobal />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
