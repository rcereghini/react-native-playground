import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const BookStack = createStackNavigator({
  Home: HomeScreen,
});

BookStack.navigationOptions = {
  tabBarLabel: 'Book',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-book${focused ? '' : '-outline'}`
          : 'md-book'
      }
    />
  ),
  tabBarOptions: {
    style: {
      backgroundColor: '#2D3142',
    },
  }
  
};

const AvatarStack = createStackNavigator({
  Links: LinksScreen,
});

AvatarStack.navigationOptions = {
  tabBarLabel: 'Avatar',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
    />
  ),
  tabBarOptions: {
    style: {
      backgroundColor: '#2D3142',
    },
  }
};

const OptionsStack = createStackNavigator({
  Settings: SettingsScreen,
});

OptionsStack.navigationOptions = {
  tabBarLabel: 'Options',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
  tabBarOptions: {
    style: {
      backgroundColor: '#2D3142',
    },
  }
};

export default createBottomTabNavigator({
  BookStack,
  AvatarStack,
  OptionsStack,
});
