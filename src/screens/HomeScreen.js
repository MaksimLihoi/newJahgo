import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {BottomNavBar} from '../Components/BottomNavBar/BottomNavBar';

export const HomeScreen = () => {
    return (
        <View style={styles.container}>

            <BottomNavBar/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
});
