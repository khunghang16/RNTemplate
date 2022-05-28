import {DarkTheme, DefaultTheme, Theme} from '@react-navigation/native';
import {Colors, ThemeManager} from 'react-native-ui-lib';
import {storeRedux} from 'store/storeRedux';
import {changeTheme} from 'store/theme';
type DesignSystemColors = Record<string, string>;

export type AppearanceMode = 'light' | 'dark';

type ThemeColors = {
  textColor: string;
  bgColor: string;
  bg2Color: string;
  bgPan: string;
};

const colors: DesignSystemColors = {
  primary: '#5383b8', // blue
  secondary: '#469c57', // green
  accent: '#fed330', // yellow
  blackish: Colors.rgba(20, 20, 20, 1),
  blackish2: Colors.rgba(50, 50, 50, 1),
  whitish: Colors.rgba(250, 250, 250, 1),
  whitish2: Colors.rgba(230, 230, 230, 1),
};

export const themes: Record<AppearanceMode, ThemeColors> = {
  light: {
    ...colors,
    textColor: colors.blackish,
    bgColor: colors.whitish,
    bgPan: Colors.rgba(Colors.black, 0.2),
    bg2Color: colors.whitish2,
  },
  dark: {
    ...colors,
    textColor: colors.whitish,
    bgColor: colors.blackish,
    bgPan: Colors.rgba(Colors.white, 0.2),
    bg2Color: colors.blackish2,
  },
};
Colors.loadSchemes(themes);
Colors.setScheme('light');

export const setTheme = (mode = storeRedux.getState().theme.mode) => {
  let nextMode: AppearanceMode = mode === 'dark' ? 'light' : 'dark';
  Colors.setScheme(nextMode);
  storeRedux.dispatch(changeTheme(nextMode));
};

export const getTheme = () => {
  return storeRedux?.getState()?.theme?.mode;
};

export const getThemeStatusBarStyle = (
  mode = storeRedux.getState().theme.mode,
) => {
  return mode === 'dark' ? 'light-content' : 'dark-content';
};

export const getNavigationTheme = (
  mode = storeRedux.getState().theme.mode,
): Theme => {
  // for more information - https://reactnavigation.org/docs/themes
  const MyDefaultTheme: Theme = {
    dark: false,
    colors: {
      ...DefaultTheme.colors,
      primary: Colors.primary,
      background: Colors.bgColor,
      card: Colors.bgColor,
      text: Colors.textColor,
      // border: Colors.grey30,
      // notification: Colors.primary,
    },
  };

  const MyDarkTheme: Theme = {
    dark: true,
    colors: {
      ...DarkTheme.colors,
      primary: Colors.primary,
      background: Colors.bgColor,
      card: Colors.bgColor,
      text: Colors.textColor,
      // border: Colors.grey30,
      // notification: Colors.primary,
    },
  };

  switch (mode) {
    case 'dark':
      return MyDarkTheme;
    default:
      return MyDefaultTheme;
  }
};

ThemeManager.setComponentTheme('Text', {
  textColor: true,
});
