import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card, Title } from 'react-native-paper';
import PropTypes from 'prop-types';

const QuestionBox = props => {
    return (
        <Card style={Styles.container}>
            <Card.Content>
                <Title>{props.question.text}</Title>
            </Card.Content>
        </Card>
    );
};

QuestionBox.propTypes = {
    question: PropTypes.object.isRequired
};

const Styles = StyleSheet.create({
    container: {
        width: '80%',
        display: 'flex'
    }
});

export default QuestionBox;
