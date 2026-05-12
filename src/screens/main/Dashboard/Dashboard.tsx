import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import auth from '@react-native-firebase/auth';
import Button from '../../../components/Button';
import { styles } from './Dashboard.styles';

const Dashboard = () => {
  const user = auth().currentUser;

  const onLogout = () => {
    auth().signOut();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.welcome}>Welcome back,</Text>
        <Text style={styles.name}>{user?.displayName || user?.email}</Text>
        
        <View style={styles.spacer} />
        
        <Button 
          title="Sign Out" 
          onPress={onLogout} 
          variant="secondary"
        />
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
