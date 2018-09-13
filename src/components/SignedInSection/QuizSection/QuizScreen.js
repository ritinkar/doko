import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import QuestionScreen from '../QuestionScreen';
import PropTypes from 'prop-types';
import { Snackbar } from 'react-native-paper';

class QuizScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuestionId: 1,
            score: 0,
            snackbarCorrectVisible: false,
            snackbarWrongVisible: false,
            timeLeft: 15,
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

    _handleAnswer = answerId => {
        const question = this.props.questions.find(
            question => question.id === this.state.currentQuestionId
        );

        if (answerId === question.correctAnswerId) {
            this.setState(prevState => {
                return {
                    currentQuestionId: prevState.currentQuestionId + 1,
                    score: prevState.score + 1,
                    snackbarCorrectVisible: true,
                    timeLeft: 15
                };
            });
        } else {
            this.setState(prevState => {
                return {
                    currentQuestionId: prevState.currentQuestionId + 1,
                    snackbarWrongVisible: true,
                    timeLeft: 15
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
                    <Snackbar
                        style={Styles.snackbarCorrect}
                        visible={this.state.snackbarCorrectVisible}
                        onDismiss={() =>
                            this.setState({ snackbarCorrectVisible: false })
                        }
                    >
                        Correct!
                    </Snackbar>
                    <Snackbar
                        style={Styles.snackbarWrong}
                        visible={this.state.snackbarWrongVisible}
                        onDismiss={() =>
                            this.setState({ snackbarWrongVisible: false })
                        }
                    >
                        Wrong!
                    </Snackbar>
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
