import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import AnswerButton from './AnswerButton';
import PropTypes from 'prop-types';

const AnswerBox = props => {
    return (
        <View style={Styles.container}>
            {props.question.answers.map(answer => (
                <AnswerButton
                    style={Styles.answerButton}
                    key={answer.id}
                    answer={answer}
                    handleAnswer={props.handleAnswer}
                />
            ))}
        </View>
    );
};

AnswerBox.propTypes = {
    question: PropTypes.object.isRequired,
    handleAnswer: PropTypes.func.isRequired
};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    answerButton: {
        marginTop: 10,
        marginBottom: 10,
        width: '100%'
    }
});

export default AnswerBox;
