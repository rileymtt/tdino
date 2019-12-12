import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    CameraRoll,
    FlatList,
    Dimensions,
    Button,
    Image,
    TouchableOpacity,
} from 'react-native';
import { FileSystem } from 'expo';
const { width } = Dimensions.get('window');

export default class SelectImages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            selected: [],
            after: null,
            has_next_page: true
        }
    }

    componentDidMount() {
        this.getPhotos()
    }

    selectImage = (index) => {
        // let newSelected = { ...this.state.selected };
        // if (newSelected[index]) {
        //     delete newSelected[index];
        // } else {
        //     newSelected[index] = true
        // }
        // if (Object.keys(newSelected).length > this.props.max) return;
        // if (!newSelected) newSelected = {};
        // this.setState({ selected: newSelected });
        const { selected } = this.state;
        const checkIndex = selected.includes(index);
        if (checkIndex) {
            selected.splice(selected.indexOf(index), 1);
        } else {
            selected.push(index);
        }
        this.setState({ selected })
    }

    getPhotos = () => {
        let params = {
            first: 50,
            assetType: "Photos",
            // groupTypes: "All" 
        };
        if (this.state.after) params.after = this.state.after
        if (!this.state.has_next_page) return
        CameraRoll
            .getPhotos(params)
            .then(this.processPhotos)
    }

    processPhotos = (r) => {
        if (this.state.after === r.page_info.end_cursor) return;
        let uris = r.edges.map(i => i.node).map(i => i.image).map(i => i.uri)
        this.setState({
            photos: [...this.state.photos, ...uris],
            after: r.page_info.end_cursor,
            has_next_page: r.page_info.has_next_page
        });
    }

    getItemLayout = (data, index) => {
        let length = width / 4;
        return { length, offset: length * index, index }
    }

    prepareCallback() {
        let { selected, photos } = this.state;
        console.log(selected);
        // let selectedPhotos = photos.filter((item, index) => {
        //     return selected.includes(index)
        // });
        let selectedPhotos = [];
        selected.map((a) => {
            photos.map((b, index) => {
                if (a === index) {
                    selectedPhotos.push(b)
                }
            })
        })
        console.log(selectedPhotos);
        // let files = selectedPhotos
        //     .map(i => FileSystem.getInfoAsync(i, { md5: true }))
        // let callbackResult = Promise
        //     .all(files)
        //     .then(imageData => {
        //         return imageData.map((data, i) => {
        //             return { file: selectedPhotos[i], ...data }
        //         })
        //     })
        // this.props.callback(callbackResult)
        // this.props.check(callbackResult);
        this.props.navigation.navigate('Form', selectedPhotos);
    }

    // renderHeader = () => {
    //     let selectedCount = this.state.selected.length;
    //     let headerText = selectedCount + ' Selected';
    //     if (selectedCount === this.props.max) headerText = headerText + ' (Max)';
    //     return (
    //         <View
    //             style={{
    //                 justifyContent: 'space-between',
    //                 flexDirection: 'row',
    //                 alignItems: 'center'
    //             }}
    //         >
    //             <Text>{headerText}</Text>
    //             <Button
    //                 title="Choose"
    //                 onPress={() => this.prepareCallback()}
    //             />
    //         </View>
    //     )
    // }

    render() {
        const { selected } = this.state;
        return (
            <View
                style={{
                    flex: 1
                }}
            >
                <View
                    style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                >
                    <Text>{selected.length} Selected</Text>
                    <Button
                        title="Choose"
                        onPress={() => this.prepareCallback()}
                    />
                </View>
                <FlatList
                    data={this.state.photos}
                    numColumns={4}
                    renderItem={({ item, index }) => {
                        return <TouchableOpacity
                            onPress={() => this.selectImage(index)}
                        >
                            <Image
                                style={{
                                    width: width / 4,
                                    height: width / 4,
                                    opacity: selected.includes(index) ? 0.5 : null
                                }}
                                source={{ uri: item }}
                            />
                            <View
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    borderRadius: 10,
                                    backgroundColor: '#000',
                                    height: 20,
                                    width: 20
                                }}
                            >
                                <Text
                                    style={{
                                        color: '#fff',
                                        textAlign: 'center'
                                    }}
                                >{selected.indexOf(index) >= 0 ? selected.indexOf(index) + 1 : null}</Text>
                            </View>
                        </TouchableOpacity>
                    }}
                    keyExtractor={(_, index) => index}
                    extraData={this.state}
                // ListHeaderComponent={this.renderHeader}
                />
            </View>
        );
    }
}