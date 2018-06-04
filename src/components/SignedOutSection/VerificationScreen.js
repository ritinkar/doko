import React from "react";
import { View } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";


const SignInScreen = ({ navigation }) => (
  <View style={{ paddingVertical: 20 }}>
    <Card>
      <FormInput placeholder="verification code" />
      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="#03A9F4"
        title="VERIFY"
        onPress={() => {
          return null
        }}
      />
    </Card>
  </View>
);

export default SignInScreen;