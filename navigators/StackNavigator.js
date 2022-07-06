import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/Details';

const DetailsStackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{
        title: 'Início',
        headerStyle: {
          backgroundColor: '#FFB5A7',
        },
        headerTintColor: '#803A2D',
      }} />
      <Stack.Screen name="Details" component={DetailsScreen} options={{
        title: 'Detalhes',
        headerStyle: {
          backgroundColor: '#FFB5A7',
        },
        headerTintColor: '#803A2D',
      }} />
    </Stack.Navigator>
  );
};

export default DetailsStackNavigator;