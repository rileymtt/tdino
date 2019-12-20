import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, Dimensions } from 'react-native';
const deviceWidth = Dimensions.get('screen').width
import Carousel, { Pagination } from 'react-native-snap-carousel';
import ImageCarousel from '../../ImageCarousel'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Ads extends React.Component {
    constructor(props) {
        super(props);
        const { ads, sizes } = props;
        const images = ads.images.split(',');
        this.state = {
            ads,
            sizes,
            activeSlide: 0,
            images,
            price: sizes[0].price,
            sizeChosen: sizes[0].value,
            fromScreen: props.fromScreen,
        }
    }

    render() {
        const {
            ads,
            images,
            price,
            sizeChosen,
            fromScreen,
            sizes
        } = this.state;

        return (
            <View
                style={{
                    marginVertical: 15,
                }}
            >
                <View
                    style={{
                        padding: 10,
                    }}
                >
                    <Text>Username</Text>
                </View>

                <ImageCarousel
                    images={images}
                />

                <View
                    style={{
                        padding: 10,
                    }}
                >
                    <View
                        style={{
                            backgroundColor: '#b5b5b5',
                            borderRadius: 8,
                            justifyContent: 'center'
                        }}
                    >
                        <Text>{ads.brand} {ads.sneaker}</Text>
                        <Text>{ads.cond}/10</Text>
                    </View>

                    <View
                        style={{
                        }}
                    >
                        <Text>Price: {price}</Text>
                        <Text>Size: {ads.sizeType} </Text>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            pagingEnabled={true}
                            data={sizes}
                            renderItem={({ item, index }) => {
                                console.log(sizeChosen, sizeChosen === item.value)
                                return (
                                    <TouchableOpacity
                                        style={{
                                            width: 30,
                                            height: 30,
                                            padding: 5,
                                            borderWidth: 1,
                                            borderRadius: 6,
                                            borderColor: sizeChosen == item.value ? '#000' : '#b5b5b5',
                                            marginRight: 10,
                                            flexDirection: 'row',
                                        }}
                                        onPress={() => this.setState({ sizeChosen: item.value, price: item.price })}
                                    >
                                        <Text
                                            style={{
                                                color: sizeChosen == item.value ? '#000' : '#b5b5b5',
                                                textAlign: 'center',
                                                alignSelf: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >{item.value}</Text>
                                    </TouchableOpacity>
                                )
                            }}
                            keyExtractor={index => index.toString()}
                            // extraData={selected}
                            onViewableItemsChanged={this.onViewableItemsChanged}
                        />
                    </View>
                </View>
            </View >
        )
    }
}