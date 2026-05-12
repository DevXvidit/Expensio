import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const db = firestore();

export const COLLECTIONS = {
  EXPENSES: 'expenses',
  USERS: 'users',
};
