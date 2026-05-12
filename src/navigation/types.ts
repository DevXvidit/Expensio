import { SCREENS } from '../constants/screens';

export { SCREENS };

export type AuthStackParamList = {
  [SCREENS.AUTH.LOGIN]: undefined;
  [SCREENS.AUTH.REGISTER]: undefined;
  [SCREENS.AUTH.FORGOT_PASSWORD]: undefined;
};

export type MainStackParamList = {
  [SCREENS.MAIN.DASHBOARD]: undefined;
  [SCREENS.MAIN.HISTORY]: undefined;
  [SCREENS.MAIN.ADD_EXPENSE]: undefined;
  [SCREENS.MAIN.SETTINGS]: undefined;
};

export type RootStackParamList = {
  [SCREENS.ROOT.AUTH_STACK]: undefined;
  [SCREENS.ROOT.MAIN_STACK]: undefined;
};
