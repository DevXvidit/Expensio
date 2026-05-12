import { create } from 'zustand';

interface AppState {
  theme: 'light' | 'dark';
  isOffline: boolean;
  setTheme: (theme: 'light' | 'dark') => void;
  setOffline: (offline: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  theme: 'dark',
  isOffline: false,
  setTheme: (theme) => set({ theme }),
  setOffline: (isOffline) => set({ isOffline }),
}));
