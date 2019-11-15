import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Image
} from 'react-native';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: ''
        }
    }

    _onLogin = () => {
        const { username, password } = this.state;
        console.log(username, password);
        // this.props.navigation.navigate('Main');
        fetch('http://192.168.1.16:3000/api/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password
            }),
        })
            .then(res => res.json())
            .then(json => {
                const { note } = json;
                console.log(note);
                this.setState({ error: note })
            })
    }

    render() {
        const { username, password, error } = this.state;
        return (
            <View
                style={{
                    justifyContent: 'center',
                    flex: 1,
                    paddingHorizontal: 10
                }}
            >
                <Text
                    style={{
                        color: '#3F704D',
                        fontSize: 30,
                        textAlign: 'center'
                    }}
                >SNEAKERS T DINO</Text>
                <TextInput
                    style={{
                        borderColor: '#000',
                        borderBottomWidth: 1,
                        marginVertical: 10
                    }}
                    placeholder='Username'
                    value={username}
                    onChangeText={(username) => this.setState({ username })}
                />
                <TextInput
                    style={{
                        borderColor: '#000',
                        borderBottomWidth: 1,
                        marginVertical: 10,
                    }}
                    placeholder='Password'
                    value={password}
                    onChangeText={(password) => this.setState({ password })}
                />
                <Text>{error}</Text>
                <TouchableOpacity
                    style={{
                        marginTop: 10,
                        padding: 10,
                        borderColor: '#000',
                        borderWidth: 1,
                        width: 100,
                    }}
                    onPress={this._onLogin}
                >
                    <Text
                        style={{
                            textAlign: 'center'
                        }}
                    >Login</Text>
                </TouchableOpacity>
            </View>
        )
    }
}