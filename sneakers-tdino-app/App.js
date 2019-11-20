import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './screens/login/Login';


import HomeStack from './screens/main/Home';

import Search from './screens/search/Search';
import Profile from './screens/profile/Profile';
import NewOrder from './screens/new_order/NewOrder';
import Transaction from './screens/transaction/Transaction';

import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Add from './screens/main/Add';

const LoginStack = createStackNavigator(
	{
		Login: Login
	},
	{
		initialRouteName: 'Login',
		headerMode: 'none'
	}
)

const SearchStack = createStackNavigator(
	{
		Search: Search
	},
	{
		// initialRouteName: 'Login',
		headerMode: 'none'
	}
)

const ProfileStack = createStackNavigator(
	{
		Profile: Profile
	},
	{
		// initialRouteName: 'Login',
		headerMode: 'none'
	}
)

const NewOrderStack = createStackNavigator(
	{
		NewOrder: NewOrder
	},
	{
		// initialRouteName: 'Login',
		headerMode: 'none'
	}
)

const TransactionStack = createStackNavigator(
	{
		Transaction: Transaction
	},
	{
		// initialRouteName: 'Login',
		headerMode: 'none'
	}
)

const MainStack = createMaterialTopTabNavigator(
	{
		HomeStack: HomeStack,
		SearchStack: SearchStack,
		NewOrderStack: NewOrderStack,
		TransactionStack: TransactionStack,
		ProfileStack: ProfileStack,
	},
	{
		// initialRouteName: 'Buy',
		tabBarPosition: 'bottom',
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
