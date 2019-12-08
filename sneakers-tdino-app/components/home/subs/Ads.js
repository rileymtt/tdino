import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, Dimensions } from 'react-native';
const deviceWidth = Dimensions.get('screen').width
import Carousel, { Pagination } from 'react-native-snap-carousel';

export default class Ads extends React.Component {
    constructor(props) {
        super(props);
        const { ads } = props;
        const images = ads.images.split(',');
        this.state = {
            ads,
            activeSlide: 0,
            images
        }
    }

    get pagination() {
        const { images, activeSlide } = this.state;
        return (
            <Pagination
                dotsLength={images.length}
                activeDotIndex={activeSlide}
                containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 8,
                    backgroundColor: 'rgba(255, 255, 255, 0.92)'
                }}
                inactiveDotStyle={{
                    // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        );
    }

    render() {
        const { ads, images, activeSlide } = this.state;
        return <View>
            <Text>Name: {ads.sneaker}</Text>
            <Text>Brand: {ads.brand}</Text>
            {/* <Text>Type: {ads.type}</Text> */}
            <Text>Cond: {ads.cond}/10</Text>
            <Text>Price: {ads.price} VND</Text>
            <Text style={{ textAlign: 'right' }}>{activeSlide + 1}/{images.length}</Text>
            <Carousel
                ref={(c) => { this._carousel = c; }}
                data={images}
                renderItem={({ item, index }) => (
                    <Image
                        style={{
                            width: deviceWidth,
                            height: 300,
                            resizeMode: 'contain',
                        }}
                        source={{ uri: 'http://192.168.1.11:3000/' + item }}
                    />
                )}
                sliderWidth={deviceWidth}
                itemWidth={deviceWidth}
                onSnapToItem={(index) => this.setState({ activeSlide: index })}
            />
            {this.pagination}
        </View>
    }
}