import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';

const HomeScreen = props => {
    console.log(props);
    return (
        <View style={Styles.container}>
            <Button
                mode="outlined"
                onPress={() => props.navigation.navigate('Quiz')}
            >
                Start quiz
            </Button>
        </View>
    );
};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default HomeScreen;
