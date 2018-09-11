import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card, Title, Paragraph } from 'react-native-paper';
import PropTypes from 'prop-types';

const QuestionBox = props => {
    return (
        <Card style={Styles.container}>
            <Card.Content>
                <Title>Score: {props.score}</Title>
                <Paragraph>{props.question.text}</Paragraph>
            </Card.Content>
        </Card>
    );
};

QuestionBox.propTypes = {
    question: PropTypes.object.isRequired,
    score: PropTypes.number.isRequired
};

const Styles = StyleSheet.create({
    container: {
        width: '80%',
        display: 'flex',
        height: '40%'
    }
});

export default QuestionBox;
