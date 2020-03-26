import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/SignIn';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

import Details from './pages/Details';
import ReportProblem from './pages/ReportProblem';
import ShowProblems from './pages/ShowProblems';
import DeliveryFinish from './pages/DeliveryFinish';

export default (signedIn = true) =>
  createAppContainer(
    createSwitchNavigator({
      Sign: createSwitchNavigator({
        SignIn,
      }),
      App: createBottomTabNavigator({
        Dashboard: {
          screen: createStackNavigator(
            {
              Dashboard,
              Details,
              ReportProblem,
              ShowProblems,
              DeliveryFinish,
            },
            {
              defaultNavigationOptions: {
                headerTransparent: true,
                headerTintColor: '#fff',
                headerLeftContainerStyle: {
                  marginLeft: 16,
                },
              },
            }
          ),
          navigationOptions: {
            tabBarLabel: 'Entregas',
            // eslint-disable-next-line react/prop-types
            tabBarIcon: ({ tintColor }) => (
              <Icon name="reorder" size={25} color={tintColor} />
            ),
          },
        },
        Profile,
      },
      {
        resetOnBlur: true,
          tabBarOptions: {
            keyboardHidesTabBar: true,
            activeTintColor: '#7159c1',
            inactiveTintColor: '#999',
            style: {
              backgroundColor: '#fff',
              height: 60,
              paddingTop: 10,
            },
            labelStyle: {
              fontSize: 14,
            },
          },
      }),
    }, {
      initialRouteName: signedIn ? 'App' : 'Sign'
    }),
  );
