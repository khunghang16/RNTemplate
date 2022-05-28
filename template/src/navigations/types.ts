import {NavigationProp, useNavigation} from '@react-navigation/native';

export type RootStackParamList = {
  Spash: undefined;

  UnAuth: undefined;
  Login: undefined;
  Intro: undefined;

  MainTab: undefined;
  Home: undefined;
  HomeModal: undefined;

  Settings: undefined;
};

export const useAppNavigation = () =>
  useNavigation<NavigationProp<RootStackParamList>>();
