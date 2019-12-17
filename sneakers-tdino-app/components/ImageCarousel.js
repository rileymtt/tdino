import React from 'react';
import {
    SafeAreaView,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    Text,
    Dimensions,
    View,
    Image
} from 'react-native';
import Constants from 'expo-constants';
const deviceWidth = Dimensions.get('window').width

export default class ImageCarousel extends React.Component {

    constructor(props) {
        super(props);
        const { images } = props;
        this.state = {
            images,
            page: '1',
        }
    }

    onViewableItemsChanged = ({ viewableItems }) => {
        const firstViewItem = viewableItems[0].index;
        // const index = this.state.images.findIndex(item => item === firstViewItem);

        this.setState({ page: firstViewItem + 1 })
    }

    render() {
        console.log('render');
        const { images, page } = this.state
        // console.log(this.state)
        return (
            <SafeAreaView>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    pagingEnabled={true}
                    data={images}
                    renderItem={({ item, index }) => {
                        return (
                            <Image
                                // resizeMode='contain'
                                style={{ width: deviceWidth, height: 300, }}
                                source={{ uri: item }}
                            />
                        )
                    }}
                    keyExtractor={index => index}
                    // extraData={selected}
                    onViewableItemsChanged={this.onViewableItemsChanged}
                />
                {
                    //background for paging
                }
                 <View
                    style={{
                        backgroundColor: '#000',
                        padding: 6,
                        borderRadius: 15,
                        paddingHorizontal: 10,
                        position: 'absolute',
                        top: 15,
                        right: 15,
                        opacity: 0.7, 
                    }}
                >
                    <Text
                        style={{
                            color: '#fff',
                            opacity: 0,
                        }}
                    >{page}/{images.length}</Text>
                </View>
                {
                    //paging
                }
                <View
                    style={{
                        // backgroundColor: '#000',
                        padding: 6,
                        borderRadius: 15,
                        paddingHorizontal: 10,
                        position: 'absolute',
                        top: 15,
                        right: 15,
                    }}
                >
                    <Text
                        style={{
                            color: '#fff',
                        }}
                    >{page}/{images.length}</Text>
                </View>
            </SafeAreaView>
        );
    }
}