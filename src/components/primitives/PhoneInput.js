import React from 'react';
import { StyleSheet, View, TextInput, Image } from 'react-native';

class PhoneInput extends React.Component {


    render() {
        return (
            <View style={styles.container}>

                <View style={styles.SectionStyle}>
                    <Picker
                        selectedValue={this.props.language}
                        onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
                        <Picker.Item label="+91" value="+91" />
                        <Picker.Item label="+1" value="+1" />
                    </Picker>


                    <TextInput
                        style={{ flex: 1 }}
                        {...this.props}
                        underlineColorAndroid="transparent"
                    />

                </View>

            </View>
        );
    }
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },

    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: .5,
        borderColor: '#000',
        height: 40,
        borderRadius: 5,
        margin: 10
    },

});

export default StyledTextInput;