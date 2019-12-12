import React from 'react';
import { Text, View, SafeAreaView, Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import SelectImages from '../../components/add/SelectImages';
import { createStackNavigator } from 'react-navigation-stack';
import Form from '../../components/add/Form';

const AddStack = createStackNavigator(
    {
        SelectImages: {
            screen: SelectImages,
        },
        Form: {
            screen: Form,
        }
    },
    {
        initialRouteName: 'SelectImages',
        headerMode: 'none'
    }
)

const AddStackContainer = createAppContainer(AddStack);

export default class Add extends React.Component {
    render() {
        return <SafeAreaView
            style={{
                flex: 1,
                // paddingTop: Platform.OS === 'android' ? 25 : 0,
            }}
        >
            <AddStackContainer />
        </SafeAreaView>
    }
}