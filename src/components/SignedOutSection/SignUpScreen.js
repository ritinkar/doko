import React from 'react';
import {
    KeyboardAvoidingView,
    Text,
    Button,
    StyleSheet,
    View
} from 'react-native';
import { StyledTextInput, Logo } from '../Core';

class SignUpScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            phone: '',
            password: ''
        };
    }

    _handleNameChange = value => {
        this.setState({
            userName: value
        });
    };

    _handlePhoneChange = value => {
        this.setState({
            phone: value
        });
    };

    _handlePasswordChange = value => {
        this.setState({
            password: value
        });
    };
    render() {
        return (
            <View style={styles.signUpScreen}>
                <Logo />

                <View style={styles.formContainer}>
                    <StyledTextInput
                        value={this.state.phone}
                        keyboardType="phone-pad"
                        onChangeText={this._handlePhoneChange}
                        placeholder="Phone number"
                    />
                    <StyledTextInput
                        value={this.state.userName}
                        onChangeText={this._handleNameChange}
                        placeholder="Username"
                    />
                    <StyledTextInput
                        value={this.state.password}
                        secureTextEntry
                        onChangeText={this._handlePasswordChange}
                        placeholder="Password"
                    />

                    <Button
                        title="SIGN UP"
                        onPress={() => this.props.signUpPress(this.state)}
                    />
                    <Button
                        title="Sign In"
                        onPress={() => this.props.navigation.navigate('SignIn')}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    signUpScreen: {
        backgroundColor: '#F80E31',
        flex: 1
    },
    formContainer: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        height: 250,
        margin: 20,
        borderRadius: 10
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
    }
});

export default SignUpScreen;
