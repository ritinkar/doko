import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import QuestionScreen from '../QuestionScreen';
import ScoreCard from './ScoreCard';
import PropTypes from 'prop-types';

class QuizScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuestionId: 1,
            score: 0,
            snackbarCorrectVisible: false,
            snackbarWrongVisible: false,
            timeLeft: 15,
            lastQuestion: false,
            quizFinished: false,
            timerId: null
        };
    }

    componentDidMount() {
        const timerId = setInterval(() => {
            // If time runs out consider it a wrong answer
            // Else Decrement the time
            if (this.state.timeLeft === 1) {
                this._handleAnswer(-1);
            } else {
                this.setState(prevState => {
                    return { timeLeft: prevState.timeLeft - 1 };
                });
            }
        }, 1000);
        this.setState({ timerId: timerId });
    }

    componentWillUnmount() {
        clearInterval(this.state.timerId);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // if update was caused by a state change and
        // if this is the last question mark it as such
        if (this.state.currentQuestionId != prevState.currentQuestionId) {
            if (this.state.currentQuestionId === this.props.questions.length) {
                this.setState({ lastQuestion: true });
            }
        }
        console.log(this.state.currentQuestionId);
    }

    _handleAnswer = answerId => {
        const question = this.props.questions.find(
            question => question.id === this.state.currentQuestionId
        );

        // Update the questionId
        // Reset the timer
        // If answer is correct increase the score
        // If this was the last question end the quiz

        if (answerId === question.correctAnswerId) {
            this.setState(prevState => {
                return {
                    currentQuestionId: prevState.currentQuestionId + 1,
                    score: prevState.score + 1,
                    timeLeft: 15,
                    quizFinished: prevState.lastQuestion ? true : false
                };
            });
        } else {
            this.setState(prevState => {
                return {
                    currentQuestionId: prevState.currentQuestionId + 1,
                    timeLeft: 15,
                    quizFinished: prevState.lastQuestion ? true : false
                };
            });
        }
    };

    render() {
        if (!this.state.quizFinished) {
            return (
                <View style={Styles.container}>
                    <QuestionScreen
                        score={this.state.score}
                        timeLeft={this.state.timeLeft}
                        question={this.props.questions.find(
                            question =>
                                question.id === this.state.currentQuestionId
                        )}
                        handleAnswer={this._handleAnswer}
                    />
                </View>
            );
        } else {
            return (
                <View style={Styles.container}>
                    <ScoreCard
                        score={this.state.score}
                        navigation={this.props.navigation}
                    />
                </View>
            );
        }
    }
}

QuizScreen.propTypes = {
    questions: PropTypes.array.isRequired
};

const Styles = StyleSheet.create({
    container: {
        flex: 1
    },
    snackbarCorrect: {
        backgroundColor: '#85f900'
    },
    snackbarWrong: {
        backgroundColor: '#ff0000'
    }
});

const mapStateToProps = state => {
    return {
        questions: state.questions.details
    };
};

export default connect(
    mapStateToProps,
    null
)(QuizScreen);
