import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppWrapper } from './src/AppWrapper';
import RootNavigator from './src/navigation/RootNavigator';

if (__DEV__) {
  require('./ReactotronConfig');
}

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" />
      <AppWrapper>
        <RootNavigator />
      </AppWrapper>
    </SafeAreaProvider>
  );
}

export default App;
