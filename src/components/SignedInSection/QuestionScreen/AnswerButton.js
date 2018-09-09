import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';

const AnswerButton = props => {
    return (
        <Button mode="outlined" style={Styles.AnswerButton}>
            world
        </Button>
    );
};

const Styles = StyleSheet.create({
    AnswerBox: {
        flex: 1,
        display: 'flex'
    }
});

export default AnswerButton;
