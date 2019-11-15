
import React from 'react';
import {
    View,
    Text,
    CameraRoll,
    FlatList,
    TouchableHighlight,
    Image,
    Dimensions,
} from 'react-native';
const { width, height } = Dimensions.get('window');

class RenderImage extends React.PureComponent {
    render() {
        let { item, index, selected, selectImage } = this.props;
        return (
            <TouchableHighlight
                style={{ opacity: selected ? 0.5 : 1 }}
                underlayColor='transparent'
                onPress={() => this.props.selectImage(index)}
                style={{
                    padding: 0.5,
                    width: width / 4,
                    height: width / 4
                }}
            >
                <Image
                    style={{ width: '100%', height: '100%' }}
                    source={{ uri: item }}
                />
            </TouchableHighlight>
        )
    }
}

export default class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            // selected: {},
            after: null,
            has_next_page: true,
            index: 0
        }
    }


    componentDidMount() {
        this._getPhotos()
    }

    _getPhotos = () => {
        let params = { first: 10, mimeTypes: ['image/jpeg'] };
        if (this.state.after) params.after = this.state.after
        if (!this.state.has_next_page) return
        CameraRoll
            .getPhotos(params)
            .then(this.processPhotos)
    }

    processPhotos = (r) => {
        if (this.state.after === r.page_info.end_cursor) return;
        let photos = r.edges.map(i => i.node).map(i => i.image).map(i => i.uri)
        this.setState({
            photos: [...this.state.photos, ...photos],
            after: r.page_info.end_cursor,
            has_next_page: r.page_info.has_next_page,
        });
    }

    selectImage = (index) => {
        this.setState({ index })
    }

    render() {
        return (
            <View>
                <View>
                    <Image
                        source={{ uri: this.state.photos[this.state.index] }}
                        style={{ width: width, height: height / 2 }}
                    />
                </View>
                <FlatList
                    data={this.state.photos}
                    numColumns={4}
                    renderItem={({ item, index }) => <RenderImage item={item} selectImage={this.selectImage} index={index}/>}
                    keyExtractor={(_, index) => index}
                    onEndReached={() => { this._getPhotos() }}
                    onEndReachedThreshold={0.5}
                    ListEmptyComponent={<Text>Loading...</Text>}
                    initialNumToRender={10}
                    getItemLayout={this.getItemLayout}
                />
            </View>
        )
    }
}