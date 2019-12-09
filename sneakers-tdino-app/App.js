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
					focused ? <View
						style={{
							borderRadius: 50,
							borderWidth: 2,
						}}
					>
						<SneakerFill
							width={25}
							height={25}
							iconColor={tintcolor}
							style_container={{ justifyContent: 'center' }}
						/></View>
						: <View
							style={{
								borderRadius: 50,
								borderWidth: 1,
							}}
						>
							<SneakerStroke
								width={25}
								height={25}
								iconColor={tintcolor}
								style_container={{ justifyContent: 'center' }}
							/></View>
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
	NewOrder: {
		screen: NewOrder,
		navigationOptions: ({ navigation }) => ({
			title: 'NewOrder',
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
	initialRouteName: 'NewOrder',
	activeColor: '#ff0000',
	inactiveColor: '#000',
	tabBarOptions: {
		labelStyle: {
			fontSize: 10,
		},
		style: {
			backgroundColor: 'blue',
		},
		showIcon: true,
		showLabel: false,
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
