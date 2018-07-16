import React from 'react';
import { View } from 'react-native';
import { QuestionBox, AnswerBox } from '../Core';

class QuizSection extends React.Component {
    render() {
        return (
            <View>
                <QuestionBox />
                <AnswerBox />
                <AnswerBox />
                <AnswerBox />
                <AnswerBox />
            </View>
        );
    }
}

export default QuizSection;
