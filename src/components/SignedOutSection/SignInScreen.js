import React from 'react';
import { View } from 'react-native';
import { Card, Button, FormLabel, FormInput } from 'react-native-elements';
import { firebaseSignIn } from '../actions/signIn';
import { connect } from 'react-redux';

class SignInScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        };
    }

    handleNameChange = value => {
        this.setState({
            userName: value
        });
    };

    handlePasswordChange = value => {
        this.setState({
            password: value
        });
    };

    render() {
        return (
            <View style={{ paddingVertical: 20 }}>
                <Card>
                    <FormInput
                        value={this.state.userName}
                        onChangeText={this.handleNameChange}
                        placeholder="User Name..."
                    />
                    <FormInput
                        value={this.state.password}
                        secureTextEntry
                        onChangeText={this.handlePasswordChange}
                        placeholder="Password..."
                    />

                    <Button
                        buttonStyle={{ marginTop: 20 }}
                        backgroundColor="transparent"
                        textStyle={{ color: '#bcbec1' }}
                        title="Sign In"
                        onPress={() => this.props.signInPress(this.state)}
                    />
                </Card>
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signInPress: user => {
            dispatch(firebaseSignIn(user));
        }
    };
};

export default connect(null, mapDispatchToProps)(SignInScreen);
