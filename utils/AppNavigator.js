import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MainScreenContainer from '../src/MainScreenContainer';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreenContainer">
        <Stack.Screen name="Image List" component={MainScreenContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
