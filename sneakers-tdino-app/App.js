import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './screens/login/Login';


import Home from './screens/main/Home';

import Search from './screens/main/Search';
import Profile from './screens/main/Profile';
import NewOrder from './screens/main/NewOrder';
import Transaction from './screens/main/Transaction';

import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

const LoginStack = createStackNavigator(
	{
		Login: Login
	},
	{
		initialRouteName: 'Login',
		headerMode: 'none'
	}
)


const MainStack = createMaterialTopTabNavigator(
	{
		Home,
		Search,
		NewOrder,
		Transaction,
		Profile,
	},
	{
		tabBarPosition: 'bottom',
		initialRouteName: 'NewOrder',
		tabBarOptions: {
			labelStyle: {
				fontSize: 10,
			},
			style: {
				backgroundColor: 'blue',
			},
		}
	}
)

const AppContainer = createAppContainer(createSwitchNavigator(
	{
		Login: LoginStack,
		Main: MainStack
	},
	{
		initialRouteName: 'Main'
	}
));

export default class App extends React.Component {
	render() {
		return <SafeAreaView
			style={{
				flex: 1,
				paddingTop: Platform.OS === 'android' ? 25 : 0,
			}}
		>
			<AppContainer />
		</SafeAreaView>
	}
}
