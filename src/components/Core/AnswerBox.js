import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AnswerBox = props => {
    return (
        <View style={Styles.AnswerBox}>
            <Text style={Styles.AnswerText}>world</Text>
        </View>
    );
};

const Styles = StyleSheet.create({
    wrapper: {},
    AnswerBox: {
        height: 42,
        width: 305,
        textAlign: 'center',
        backgroundColor: '#ffffff'
    },
    AnswerText: {
        textAlign: 'center',
        color: '#000000',
        fontWeight: 'bold'
    }
});

export default AnswerBox;
