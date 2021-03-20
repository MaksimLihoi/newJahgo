import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {BottomNavBar} from '../Components/BottomNavBar/BottomNavBar';
import {DaySessions} from '../Components/DaySessions/DaySessions';


export const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <DaySessions/>
            <BottomNavBar/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
});
