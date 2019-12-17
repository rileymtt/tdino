import React from 'react';
import { Text, View, SafeAreaView, Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import Buy from '../../components/home/Buy';
import Sell from '../../components/home/Sell';
import Swap from '../../components/home/Swap';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

const HomeStack = createMaterialTopTabNavigator(
	{
		Buy: Buy,
		Sell: Sell,
		Swap: Swap
	},
	{
		initialRouteName: 'Buy',
		swipeEnabled: false,
	}
)

const HomeAppContainer = createAppContainer(HomeStack);

export default class Home extends React.Component {
	render() {
		return <SafeAreaView
			style={{
				flex: 1,
				// paddingTop: Platform.OS === 'android' ? 25 : 0,
			}}
		>
			<HomeAppContainer />
		</SafeAreaView>
	}
}
