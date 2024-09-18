import type { RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { NewsResult } from '@src/services';

export enum Screen {
  FORCE_UPDATE_SCREEN = 'FORCE_UPDATE_SCREEN',
  NETWORK_CHECK = 'NETWORK_CHECK',
  ORDER = 'ORDER',
  LOGIN = 'LOGIN',
  SIGNUP = 'SIGNUP',
}

export type NavStackParams = {
  [Screen.FORCE_UPDATE_SCREEN]: undefined;
  [Screen.NETWORK_CHECK]: undefined;
  [Screen.ORDER]: undefined;
  [Screen.LOGIN]: undefined;
  [Screen.SIGNUP]: undefined;
};

export type NewsDetailParams = {
  item: NewsResult;
};

export type AppNavigationProp = NativeStackNavigationProp<NavStackParams>;
