import React from 'react';
import {Image, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashboardScreen from '../../../screens/dashboard/DashboardScreen';
import {colors} from '../../../helpers/colors';
import {icons} from '../../../helpers/iconConstants';
import {bottomStyles, styles} from './style';
import Tabscreen from '../../../screens/tabscreen/tabscreen';
import {hp} from '../../../helpers/constants';

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function BottomFunction() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveBackgroundColor: colors.primary0D2320,
        tabBarActiveBackgroundColor: colors.primary0D2320,
        tabBarActiveTintColor: colors.green,
        tabBarInactiveTintColor: colors.greenA7CCD5,

        tabBarStyle: {
          height: hp(80),
          paddingBottom: 20,
          paddingTop: 10,
          backgroundColor: colors.primary0D2320,
        },
        tabBarShowLabel: true,
      }}>
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({}) => (
            <Image
              style={bottomStyles.bottombarIcons}
              source={icons.homeIcon}></Image>
          ),
        }}
      />
      <Tab.Screen
        name="Calender"
        component={Tabscreen}
        options={{
          tabBarIcon: ({}) => (
            <Image
              style={bottomStyles.bottombarIcons}
              source={icons.calendarIcon}></Image>
          ),
        }}
      />
      <Tab.Screen
        name="Cummunity"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({}) => (
            <Image
              style={bottomStyles.bottombarIcons}
              source={icons.communityIcon}></Image>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({}) => (
            <Image
              style={bottomStyles.bottombarIcons}
              source={icons.profileIcon}></Image>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
