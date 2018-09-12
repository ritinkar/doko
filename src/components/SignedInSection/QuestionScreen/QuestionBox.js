import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card, Title, Paragraph } from 'react-native-paper';
import PropTypes from 'prop-types';

const QuestionBox = props => {
    return (
        <View style={Styles.container}>
            <Title>Score: {props.score}</Title>
            <Paragraph>{props.question.text}</Paragraph>
        </View>
    );
};

QuestionBox.propTypes = {
    question: PropTypes.object.isRequired,
    score: PropTypes.number.isRequired
};

const Styles = StyleSheet.create({
    container: {
        flex: 0.3
    }
});

export default QuestionBox;
