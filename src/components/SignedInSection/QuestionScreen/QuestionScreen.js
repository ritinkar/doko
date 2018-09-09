import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import AnswerBox from './AnswerBox';
import QuestionBox from './QuestionBox';
import PropTypes from 'prop-types';

const QuestionScreen = props => {
    return (
        <View style={Styles.container}>
            <QuestionBox question={props.question} />
            <AnswerBox
                question={props.question}
                handleAnswer={props.handleAnswer}
            />
        </View>
    );
};

QuestionScreen.propTypes = {
    question: PropTypes.object.isRequired,
    handleAnswer: PropTypes.func.isRequired
};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center'
    }
});

export default QuestionScreen;
