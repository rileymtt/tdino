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
        const firstViewItem = viewableItems[0].item;
        const index = this.state.images.findIndex(item => item === firstViewItem);

        this.setState({ page: index + 1 })
    }

    render() {
        console.log('render');
        const { images, page } = this.state
        console.log(this.state)
        return (
            <SafeAreaView>
                <View
                    style={{
                        backgroundColor: '#000',
                        // padding: 6,
                        // borderRadius: 6,
                        position: 'absolute',
                        top: 20,
                        right: 15,
                    }}
                >
                    <Text
                        style={{
                            color: '#fff',
                        }}
                    >{page}/{images.length}</Text>
                </View>
                <Text
                    style={{
                        alignSelf: 'flex-end',

                    }}
                >{page}/{images.length}</Text>
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

            </SafeAreaView>
        );
    }
}