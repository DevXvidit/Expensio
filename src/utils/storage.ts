import { MMKV } from 'react-native-mmkv';

// @ts-ignore
export const storage = new MMKV();

export const mmkvStorage = {
  setItem: (key: string, value: string) => {
    storage.set(key, value);
  },
  getItem: (key: string) => {
    return storage.getString(key);
  },
  removeItem: (key: string) => {
    storage.delete(key);
  },
};
