import React from 'react';
import { View, Button } from 'react-native';

const SignInScreen = ({ navigation }) => (
    <View style={{ paddingVertical: 20 }}>
        <View>
            <FormInput placeholder="verification code" />
            <Button
                buttonStyle={{ marginTop: 20 }}
                backgroundColor="#03A9F4"
                title="VERIFY"
                onPress={() => {
                    return null;
                }}
            />
        </View>
    </View>
);

export default SignInScreen;
