import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
const { width } = Dimensions.get('window');

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'Buy',
            sneaker: '',
            brand: '',
            kind: '',
            size: '',
            cond: '',
            price: '',
            images: props.navigation.state.params
        }
    }

    _createOrder = () => {
        console.log(this.state);
    }

    render() {
        const { type, images } = this.state;
        return <SafeAreaView
            style={{
                flex: 1,
                // paddingTop: Platform.OS === 'android' ? 25 : 0,
            }}
        >
            <View>
                <TouchableOpacity
                    onPress={() => this.props.navigation.goBack()}
                    style={{
                        padding: 10,
                        borderColor: '#000',
                        borderWidth: 1,
                        width: 100
                    }}
                >
                    <Text>Back</Text>
                </TouchableOpacity>
            </View>
            <Text>Sneaker's info</Text>
            <Image
                style={{
                    width: width / 4,
                    height: width / 4,
                }}
                source={{ uri: images[0] }}
            />
            <View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                >
                    <TouchableOpacity
                        style={{
                            borderWidth: 1,
                            borderColor: '#000',
                            width: width / 3 - 5,
                            padding: 10,
                            backgroundColor: type === 'Buy' ? 'red' : null
                        }}
                        onPress={() => this.setState({ type: 'Buy' })}
                    ><Text style={{ textAlign: 'center' }}>Buy</Text></TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            borderWidth: 1,
                            borderColor: '#000',
                            width: width / 3 - 5,
                            padding: 10,
                            backgroundColor: type === 'Sell' ? 'red' : null
                        }}
                        onPress={() => this.setState({ type: 'Sell' })}
                    ><Text style={{ textAlign: 'center' }}>Sell</Text></TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            borderWidth: 1,
                            borderColor: '#000',
                            width: width / 3 - 5,
                            padding: 10,
                            backgroundColor: type === 'Swap' ? 'red' : null
                        }}
                        onPress={() => this.setState({ type: 'Swap' })}
                    ><Text style={{ textAlign: 'center' }}>Swap</Text></TouchableOpacity>
                </View>
                <TextInput
                    placeholder='Sneaker name'
                    style={{
                        borderBottomColor: '#000',
                        borderBottomWidth: 1
                    }}
                    onChangeText={(sneaker) => this.setState({ sneaker })}
                />
                <TextInput
                    placeholder='Brand'
                    style={{
                        borderBottomColor: '#000',
                        borderBottomWidth: 1
                    }}
                    onChangeText={(brand) => this.setState({ brand })}
                />
                <TextInput
                    placeholder='Kind'
                    style={{
                        borderBottomColor: '#000',
                        borderBottomWidth: 1
                    }}
                    onChangeText={(kind) => this.setState({ kind })}
                />
                <TextInput
                    placeholder='Size'
                    style={{
                        borderBottomColor: '#000',
                        borderBottomWidth: 1
                    }}
                    onChangeText={(size) => this.setState({ size })}
                />
                <TextInput
                    placeholder='Cond'
                    style={{
                        borderBottomColor: '#000',
                        borderBottomWidth: 1
                    }}
                    onChangeText={(cond) => this.setState({ cond })}
                />
                <TextInput
                    placeholder='Price'
                    style={{
                        borderBottomColor: '#000',
                        borderBottomWidth: 1
                    }}
                    onChangeText={(price) => this.setState({ price })}
                />
                <TouchableOpacity
                    style={{
                        borderWidth: 1,
                        borderColor: '#000',
                        // width: width / 3 - 5,
                        padding: 10,
                        backgroundColor: type === 'Swap' ? 'red' : null,
                        marginTop: 10
                    }}
                    onPress={this._createOrder}
                ><Text style={{ textAlign: 'center' }}>Confirm</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    }
}