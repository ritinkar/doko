import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

const QuestionBox = props => {
    return (
        <View style={Styles.container}>
            <Text>hello</Text>
        </View>
    );
};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex'
    }
});

export default QuestionBox;
