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
                    "images": "http://sellervn.vn/upload/baiviet/peaceminusonenikeairforce1storelist1-8873.jpg"
                    +",https://i2.wp.com/snkrvn.com/wp-content/uploads/2019/11/G-Dragon-PEACEMINUSONE-x-Nike-Air-Force-1-22Para-Noise22-3.jpg?resize=960%2C640&ssl=1"
                },
                {
                    "id": "2",
                    "sneaker": "AF2 Baca baca",
                    "brand": "Nike",
                    "cond": "10",
                    "price": "11500000",
                    "images": "https://wwws.dior.com/couture/ecommerce/media/catalog/product/cache/1/cover_image_mobile_2/715x773/17f82f742ffe127f42dca9de82fb58b1/1/e/1544604343_KCK217TLK_S11X_E02_GHC.jpg"
                    +",https://cdn.shopify.com/s/files/1/1903/5555/products/vader_smooth_pu_jams_fabric_black_silver_002_530x@2x.jpg?v=1563552741"
                },
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
        console.log('Buy.js')
        return (
            <View
                style={{
                    // paddingHorizontal: 10,
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