import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, Dimensions } from 'react-native';
import Ads from './subs/Ads';

export default class Buy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ads: [],
        }
    }

    componentDidMount() {
        fetch('http://192.168.1.11:3000/api/ads/buy')
            .then(res => res.json())
            .then(json => {
                const { result } = json;
                this.setState({ ads: result })
            })
    }

    render() {
        const { ads } = this.state;
        return (
            <View
                style={{
                    paddingHorizontal: 10,
                    flex: 1
                }}
            >
                <FlatList
                    data={ads}
                    renderItem={({ item }) => <Ads ads={item} />}
                    keyExtractor={item => item.id.toString()}
                    extraData={this.state}
                />
            </View>
        )
    }
}