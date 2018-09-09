import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import AnswerButton from './AnswerButton';

const AnswerBox = props => {
    return (
        <View style={Styles.container}>
            <AnswerButton />
            <AnswerButton />
            <AnswerButton />
            <AnswerButton />
        </View>
    );
};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex'
    }
});

export default AnswerBox;
