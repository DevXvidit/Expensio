import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainStackParamList, SCREENS } from './types';
import Dashboard from '../screens/main/Dashboard';

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}
    >
      <Stack.Screen name={SCREENS.MAIN.DASHBOARD} component={Dashboard} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
