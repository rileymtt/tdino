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
                    marginVertical: 10,
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

                    <Text
                        style={{
                            fontSize: 22,
                            textAlign: 'center',
                            fontWeight: '700',
                            marginVertical: 5,
                        }}
                    >{ads.brand} {ads.sneaker}</Text>

                    <Text
                        style={{
                            fontSize: 14,
                            color: '#b5b5b5',
                            textAlign: 'center',
                            marginBottom: 5,
                        }}
                    >Condition: {ads.cond}</Text>

                    <Text
                        style={{
                            fontSize: 25,
                            textAlign: 'center',
                            fontWeight: '600',
                            marginVertical: 5,
                            color: fromScreen === 'buy' ? '#09A05D' : '#FF5A5F',
                        }}
                    >{price} {ads.currency}</Text>

                    <View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'baseline'
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 18,
                                }}
                            >Available Sizes: {ads.sizeType} </Text>
                            <TouchableOpacity
                                style={{
                                    padding: 5,
                                    borderColor: '#000',
                                    borderWidth: 0.8,
                                    borderRadius: 6,
                                }}

                            >
                                <Text
                                    style={{
                                        fontSize: 12,
                                        color: '#000',
                                    }}
                                >Size chart</Text>
                            </TouchableOpacity>
                        </View>


                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            // scrollEnabled={false}
                            pagingEnabled={true}
                            data={sizes}
                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity
                                        style={{
                                            // width: 30,
                                            // height: 30,
                                            padding: 10,
                                            borderWidth: 1,
                                            borderRadius: 6,
                                            borderColor: sizeChosen == item.value ? '#000' : '#b5b5b5',
                                            marginRight: 10,
                                            // flexDirection: 'row',
                                            // marginTop: 10,
                                            backgroundColor: sizeChosen == item.value ? '#000' : 'transparent'
                                        }}
                                        onPress={() => this.setState({ sizeChosen: item.value, price: item.price })}
                                    >
                                        <Text
                                            style={{
                                                color: sizeChosen == item.value ? '#fff' : '#b5b5b5',
                                                // textAlign: 'center',
                                                // alignSelf: 'center',
                                                // justifyContent: 'center',
                                            }}
                                        >{item.value}</Text>
                                    </TouchableOpacity>
                                )
                            }}
                            keyExtractor={({ item, index }) => index}
                            // extraData={selected}
                            // onViewableItemsChanged={this.onViewableItemsChanged}
                            style={{
                                marginTop: 10,
                                // flexDirection: 'row',
                                // flexWrap: 'wrap',
                            }}
                        />
                    </View>
                    
                </View>
            </View>

        )
    }
}