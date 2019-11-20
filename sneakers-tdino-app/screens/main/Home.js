import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Buy from './Buy';
import Sell from './Sell';
import Swap from './Swap';

import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Add from './Add';


const HomeStack = createMaterialTopTabNavigator(
	{
		Buy: Buy,
		Sell: Sell,
		Swap: Swap
		// Add: Add
	},
	{
		initialRouteName: 'Buy',
		// tabBarPosition: 'bottom',
	}
)

const HomeAppContainer = createAppContainer(HomeStack);

export default class Home extends React.Component {
	render() {
		return <SafeAreaView
			style={{
				flex: 1,
				paddingTop: Platform.OS === 'android' ? 25 : 0,
			}}
		>
            <View>
                <Text>T Dino</Text>
            </View>
			<HomeAppContainer />
		</SafeAreaView>
	}
}
