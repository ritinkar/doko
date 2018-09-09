import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import AnswerBox from './AnswerBox';
import QuestionBox from './QuestionBox';

const QuestionScreen = props => {
    return (
        <View style={Styles.container}>
            <QuestionBox />
            <AnswerBox />
        </View>
    );
};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex'
    }
});

export default QuestionScreen;
