import React from 'react';
import { View, Button } from 'react-native';
import { StyledTextInput } from '../Core';

class SignInScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        };
    }

    _handleNameChange = value => {
        this.setState({
            userName: value
        });
    };

    _handlePasswordChange = value => {
        this.setState({
            password: value
        });
    };

    render() {
        return (
            <View style={{ paddingVertical: 20 }}>
                <View>
                    <StyledTextInput
                        value={this.state.userName}
                        onChangeText={this._handleNameChange}
                        placeholder="User Name..."
                    />
                    <StyledTextInput
                        value={this.state.password}
                        secureTextEntry
                        onChangeText={this._handlePasswordChange}
                        placeholder="Password..."
                    />

                    <StyledTextInput
                        buttonStyle={{ marginTop: 20 }}
                        backgroundColor="transparent"
                        textStyle={{ color: '#bcbec1' }}
                        title="Sign In"
                        onPress={() => {}}
                    />
                </View>
            </View>
        );
    }
}

export default SignInScreen;
