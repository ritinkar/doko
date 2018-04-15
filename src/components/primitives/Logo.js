import React from 'react';
import { Text, StyleSheet } from 'react-native';


const Logo = () => (

    <Text style={styles.Logo}>doko</Text>

)

const styles = StyleSheet.create({
    Logo: {
        color: '#FFFFFF',
        fontSize: 32,
        fontWeight: 'bold',
        fontFamily: 'fredokaOne-Regular',
        textAlign: 'center'
    }
})

export default Logo;