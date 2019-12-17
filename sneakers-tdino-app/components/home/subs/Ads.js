import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, Dimensions } from 'react-native';
const deviceWidth = Dimensions.get('screen').width
import Carousel, { Pagination } from 'react-native-snap-carousel';
import ImageCarousel from '../../ImageCarousel'

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
            price: '',
            quantity: '',
            sizeChosen: '',
            beforeSize: '',
            afterSize: '',
            fromScreen: props.fromScreen,
        }
        this.onViewableItemsChanged = this.onViewableItemsChanged.bind(this)
    }

    onViewableItemsChanged = ({viewableItems}) => {
        const { sizes } = this.state
        console.log('hello', viewableItems[0].item)
        // const { item, } = viewableItems[0]
        // const { price, quantity, value } = item
        // this.setState({
        //     price,
        //     quantity,
        //     sizeChosen: value,
        //     // beforeSize: index - 1 < 0 ? '' : sizes[index - 1].value,
        //     // afterSize: index + 1 === sizes.length ? '' : sizes[index + 1].value,
        // })
    }



    render() {
        const {
            ads,
            images,
            price,
            quantity,
            sizeChosen,
            fromScreen,
            beforeSize,
            afterSize,  
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
                    <Text>Name: {ads.brand} {ads.sneaker}</Text>
                    <Text>Cond: {ads.cond}/10</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'baseline',
                        }}
                    >
                        <Text>Size: {ads.sizeType} </Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <Text
                                style={{
                                    opacity: 0.7,
                                    textAlign: 'center',
                                    paddingHorizontal: 5,
                                }}
                            >{beforeSize}</Text>
                            <View
                                style={{
                                    width: 40,
                                    borderColor: 'red',
                                    borderBottomWidth: 1,
                                }}
                            >
                                {
                                    sizes.length > 1 ?
                                        <FlatList
                                            showsHorizontalScrollIndicator={false}
                                            horizontal={true}
                                            pagingEnabled={true}
                                            data={ads.size}
                                            renderItem={({ item, index }) => {
                                                return (
                                                    <Text
                                                        style={{
                                                            width: 40,
                                                            textAlign: 'center',
                                                            fontWeight: '600',
                                                            fontSize: 18,
                                                        }}
                                                    >{item.value}</Text>
                                                )
                                            }}
                                            keyExtractor={index => index.toString()}
                                            // extraData={selected}
                                            onViewableItemsChanged={this.onViewableItemsChanged}
                                        />
                                        : <Text
                                            style={{
                                                width: 40,
                                                textAlign: 'center',
                                                fontWeight: '600',
                                                fontSize: 18,
                                            }}>{sizes[0].value}</Text>
                                }

                            </View>
                            <Text
                                style={{
                                    opacity: 0.7,
                                    textAlign: 'center',
                                    paddingHorizontal: 5,
                                }}
                            >{afterSize}</Text>
                        </View>
                    </View>
                </View>
            </View >
        )
    }
}