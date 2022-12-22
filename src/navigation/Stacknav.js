import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashboardScreen from '../screens/dashboard/DashboardScreen';
import {NavigationContainer} from '@react-navigation/native';
import {colors} from '../helpers/colors';
import BottomFunction from '../components/common/bottombar/bottombar';
import EditMembership from '../screens/membership/editMembershipScreen';
import {navigationRef} from '../helpers/navigationService';

const Stack = createNativeStackNavigator();

const Stacknav = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{headerShown: false, statusBarColor: colors.appColor}}>
        <Stack.Screen name="BottomFunction" component={BottomFunction} />
        <Stack.Screen name="EditMembership" component={EditMembership} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stacknav;
