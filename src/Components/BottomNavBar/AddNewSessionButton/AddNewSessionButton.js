import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, ImageBackground, Button, Text} from 'react-native';
import {ScreenSizes} from '../../../assets/styles/ScreenSizes';

const newSessionImage = require('../../../assets/images/plus-button-09.png');

export const AddNewSessionButton = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.9} style={styles.touchArea}>
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
    touchArea: {
        width: 80,
        height: 80,
        bottom: 24,
        left: '0.4%'
    },
    image: {
        alignSelf: 'center',
        width: '100%',
        height: '100%',
    },

});
