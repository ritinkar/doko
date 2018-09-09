import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import QuestionScreen from '../QuestionScreen';
import PropTypes from 'prop-types';

class QuizScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuestionId: 1,
            score: 0
        };
    }
    _handleAnswer = answerId => {
        this.setState(prevState => {
            return {
                currentQuestionId: prevState.currentQuestionId + 1,
                score: prevState.score + 1
            };
        });
    };

    render() {
        return (
            <QuestionScreen
                question={this.props.questions.find(
                    question => question.id === this.state.currentQuestionId
                )}
                handleAnswer={this._handleAnswer}
            />
        );
    }
}

QuizScreen.propTypes = {
    questions: PropTypes.array.isRequired
};

const mapStateToProps = state => {
    return {
        questions: state.questions.details
    };
};

export default connect(
    mapStateToProps,
    null
)(QuizScreen);
