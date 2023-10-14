import * as React from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import Root from 'navigations/root';
import {StatusBar} from 'react-native';
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
// import {reactNavigationInstrumentation, initSentry} from 'services/sentry';
import {RootStackParamList} from 'navigations/types';

// initSentry();

export const navigationRef =
  React.createRef<NavigationContainerRef<RootStackParamList>>();

export default function App() {
  const theme = useSelector((state: RootState) => state.theme);
  return (
    <View bg-bgColor flex>
      <StatusBar
        barStyle={getThemeStatusBarStyle()}
        translucent={true}
        backgroundColor={getBgStatusBarStyle()}
      />
      <NavigationContainer
        ref={navigationRef}
        theme={getNavigationTheme(theme.mode)}
        onReady={() => {
          // reactNavigationInstrumentation.registerNavigationContainer(
          //   navigationRef,
          // );
          RNBootSplash.hide({fade: true});
        }}>
        <Root />
      </NavigationContainer>
      <ModalGlobal />
    </View>
  );
}
