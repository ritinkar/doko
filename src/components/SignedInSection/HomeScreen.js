import React from 'react';
import { AppRegistry, StyleSheet, Text, Button, View } from 'react-native';
import Swiper from 'react-native-swiper';
import CreateScreen from './CreateScreen';
import InboxScreen from './InboxScreen';

const HomeScreen = () => (
    <Swiper
        style={Styles.wrapper}
        showsButtons={false}
        loop={false}
        showsPagination={false}
        index={1}
    >
        <View style={Styles.slide1}>
            <CreateScreen />
        </View>
        <View style={Styles.slide2}>
            <InboxScreen />
        </View>
        <View style={Styles.slide3}>
            <Text style={Styles.text}>And simpe</Text>
        </View>
    </Swiper>
);

const Styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
});

export default HomeScreen;
