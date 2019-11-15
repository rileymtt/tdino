import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './screens/login/Login';
import Buy from './screens/main/Buy';
import Sell from './screens/main/Sell';
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

const MainStack = createMaterialTopTabNavigator(
	{
		Buy: Buy,
		Sell: Sell,
		Add: Add
	},
	{
		initialRouteName: 'Add',
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
