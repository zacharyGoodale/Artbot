import React from 'react';
import { AsyncStorage, StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { Images, Colors, Metrics } from '../Themes'

import HomeScreen from '../Screens/HomeScreen.js'
import DisasterpieceNav from '../Screens/Disasterpiece/DisasterpieceNav.js'
import ProfileScreen from '../Screens/ProfileScreen.js'
import GalleryScreen from '../Screens/GalleryScreen.js'
import SessionSettingsScreen from '../Screens/Disasterpiece/SessionSettingsScreen.js'

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';


export default createAppContainer(createBottomTabNavigator(
    {

      Profile: {screen: ProfileScreen},
      Home: {screen: DisasterpieceNav},
      Gallery: {screen: GalleryScreen},
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Profile') {
            iconName = `ios-person`;
          } else if (routeName === 'Home') {
            iconName = `ios-home`;
          } else if (routeName === 'Gallery'){
            iconName = `ios-image`;
          }

          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
      }),
      initialRouteName: 'Home',
      tabBarPosition: 'bottom',
      tabBarOptions: {
        activeTintColor: 'deepskyblue',
        inactiveTintColor: 'gray',
      },
      animationEnabled: false,
      swipeEnabled: false,
    }
  ));
