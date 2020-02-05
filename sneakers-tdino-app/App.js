import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './screens/login/Login';

import Home from './screens/main/Home';

import Search from './screens/main/Search';
import Profile from './screens/main/Profile';
import Add from './screens/main/Add';
import Transaction from './screens/main/Transaction';

import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import {
	PlusFill,
	PlusStroke,
	SearchFill,
	SearchStroke,
	SneakerFill,
	SneakerStroke,
	TradeFill,
	TradeStroke,
	UserFill,
	UserStroke,
} from './components/svg'

const LoginStack = createStackNavigator(
	{
		Login: Login
	},
	{
		initialRouteName: 'Login',
		headerMode: 'none'
	}
)


const MainStack = createMaterialTopTabNavigator({
	Home: {
		screen: Home,
		navigationOptions: ({ navigation }) => ({
			title: 'Home',
			header: null,
			tabBarIcon: ({ focused, tintcolor }) => {
				return (
					focused ? <SneakerFill
							width={43}
							height={40*24.6/52}
							iconColor={tintcolor}
							style_container={{ justifyContent: 'center', marginTop: 5, }}
						/>
						: <SneakerStroke
								width={38}
								height={35*26.9/52}
								iconColor={tintcolor}
								style_container={{ justifyContent: 'center', marginTop: 5, }}
							/>
				)
			},
		})
	},
	Search: {
		screen: Search,
		navigationOptions: ({ navigation }) => ({
			title: 'Search',
			header: null,
			tabBarIcon: ({ focused, tintcolor }) => {
				return (
					focused ? <SearchFill
						width={25}
						height={25}
						iconColor={tintcolor}
						style_container={{ justifyContent: 'center' }}
					/>
						: <SearchStroke
							width={25}
							height={25}
							iconColor={tintcolor}
							style_container={{ justifyContent: 'center' }}
						/>
				)

			},
		})
	},
	Add: {
		screen: Add,
		navigationOptions: ({ navigation }) => ({
			title: 'Add',
			header: null,
			tabBarIcon: ({ focused, tintcolor }) => {
				return (
					focused ? <PlusFill
						width={25}
						height={25}
						iconColor={tintcolor}
						style_container={{ justifyContent: 'center' }}
					/>
						: <PlusStroke
							width={25}
							height={25}
							iconColor={tintcolor}
							style_container={{ justifyContent: 'center' }}
						/>
				)

			},
		})
	},
	Transaction: {
		screen: Transaction,
		navigationOptions: ({ navigation }) => ({
			title: 'Transaction',
			header: null,
			tabBarIcon: ({ focused, tintcolor }) => {
				return (
					focused ? <TradeFill
						width={25}
						height={25}
						iconColor={tintcolor}
						style_container={{ justifyContent: 'center' }}
					/>
						: <TradeStroke
							width={25}
							height={25}
							iconColor={tintcolor}
							style_container={{ justifyContent: 'center' }}
						/>
				)

			},
		})
	},
	Profile: {
		screen: Profile,
		navigationOptions: ({ navigation }) => ({
			title: 'Profile',
			header: null,
			tabBarIcon: ({ focused, tintcolor }) => {
				return (
					focused ? <UserFill
						width={25}
						height={25}
						iconColor={tintcolor}
						style_container={{ justifyContent: 'center' }}
					/>
						: <UserStroke
							width={25}
							height={25}
							iconColor={tintcolor}
							style_container={{ justifyContent: 'center' }}
						/>
				)

			},
		})
	},
}, {
	tabBarPosition: 'bottom',
	initialRouteName: 'Home',
	activeColor: '#ff0000',
	inactiveColor: '#000',
	swipeEnabled: false,
	lazy: true,
	tabBarOptions: {
		labelStyle: {
			fontSize: 10,
		},
		style: {
			backgroundColor: '#fff',
		},
		indicatorStyle: {
			backgroundColor: 'none'
		},
		showIcon: true,
		showLabel: false,
	}
}
)

const AppContainer = createAppContainer(createSwitchNavigator(
	{
		// Login: LoginStack,
		Main: MainStack
	},
	{
		initialRouteName: 'Main'
	}
));

export default class App extends React.Component {
	render() {
		// console.log('hello')
		return <SafeAreaView
			style={{
				flex: 1,
				paddingTop: Platform.OS === 'android' ? 25 : 0,
			}}
		>
			<StatusBar barStyle="dark-content" />
			<AppContainer />
		</SafeAreaView>
	}
}
