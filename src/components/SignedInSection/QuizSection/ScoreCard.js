import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Card } from 'react-native-paper';
import PropTypes from 'prop-types';

const ScoreCard = props => {
    return (
        <View style={Styles.container}>
            <Card style={Styles.questionCard}>
                <Card.Content>
                    <Text> Congrats, your score is {props.score}</Text>
                    <Button
                        mode="outlined"
                        onPress={() => props.navigation.navigate('Home')}
                    >
                        Go to Home
                    </Button>
                </Card.Content>
            </Card>
        </View>
    );
};

ScoreCard.propTypes = {
    score: PropTypes.number.isRequired,
    navigation: PropTypes.object.isRequired
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
    }
});

export default ScoreCard;
