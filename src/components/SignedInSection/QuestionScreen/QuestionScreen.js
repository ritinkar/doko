import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Card } from 'react-native-paper';
import AnswerBox from './AnswerBox';
import QuestionBox from './QuestionBox';
import PropTypes from 'prop-types';

const QuestionScreen = props => {
    return (
        <View style={Styles.container}>
            <Card style={Styles.questionCard}>
                <Card.Content>
                    <QuestionBox
                        question={props.question}
                        score={props.score}
                    />
                    <AnswerBox
                        question={props.question}
                        handleAnswer={props.handleAnswer}
                    />
                </Card.Content>
            </Card>
        </View>
    );
};

QuestionScreen.propTypes = {
    question: PropTypes.object.isRequired,
    handleAnswer: PropTypes.func.isRequired,
    score: PropTypes.number.isRequired
};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    questionCard: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        display: 'flex',
        height: '90%'
    },
    cardContent: {
        width: '100%'
    }
});

export default QuestionScreen;
