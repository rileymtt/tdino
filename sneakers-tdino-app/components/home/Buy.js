import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, Dimensions } from 'react-native';
import Ads from './subs/Ads';

export default class Buy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ads: [
                {
                    "id": "1",
                    "sneaker": "AF1 Para para",
                    "brand": "Nike",
                    "cond": "10",
                    "price": "11500000",
                    "images": "http://sellervn.vn/upload/baiviet/peaceminusonenikeairforce1storelist1-8873.jpg,https://i2.wp.com/snkrvn.com/wp-content/uploads/2019/11/G-Dragon-PEACEMINUSONE-x-Nike-Air-Force-1-22Para-Noise22-3.jpg?resize=960%2C640&ssl=1"
                }
            ],
        }
    }

    // componentDidMount() {
    //     fetch('http://192.168.1.11:3000/api/ads/buy')
    //         .then(res => res.json())
    //         .then(json => {
    //             const { result } = json;
    //             this.setState({ ads: result })
    //         })
    // }

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