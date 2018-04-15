import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

import Swiper from 'react-native-swiper';

import CreateScreen from './CreateScreen';
import InboxScreen from './InboxScreen';

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

const BaseSwiper = ({ navigation }) =>
  (
    <Swiper style={styles.wrapper} showsButtons={false} loop={false} showsPagination={false}	index={1}>
      <View style={styles.slide1}>
        <CreateScreen />
      </View>
      <View style={styles.slide2} >
        <InboxScreen/>
      </View>
      <View style={styles.slide3}>
        <Text style={styles.text}>And simpe</Text>
      </View>
    </Swiper>
  )

export default BaseSwiper;

