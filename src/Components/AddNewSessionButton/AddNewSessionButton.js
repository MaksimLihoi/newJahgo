import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, ImageBackground, Button, Text} from 'react-native';

const newSessionImage = require('../../assets/images/plus-button-09.png');

export const AddNewSessionButton = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.9}>
                <ImageBackground source={newSessionImage} style={styles.image}>
                    <Text> </Text>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        zIndex: 2,
    },
    image: {
        alignSelf: 'center',
        width: 80,
        height: 80,
        bottom: 24,
        left: 1
    },

});
