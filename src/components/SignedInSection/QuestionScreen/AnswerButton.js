import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import PropTypes from 'prop-types';

const AnswerButton = props => {
    return (
        <Button mode="outlined" style={Styles.AnswerButton}>
            {props.answer.text}
        </Button>
    );
};

AnswerButton.propTypes = {
    answer: PropTypes.object.isRequired
};

const Styles = StyleSheet.create({
    AnswerBox: {
        flex: 1,
        display: 'flex'
    }
});

export default AnswerButton;
