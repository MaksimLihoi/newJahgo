import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {BottomNavBar} from '../Components/HomeScreenComponents/BottomNavBar/BottomNavBar';
import {DaySessions} from '../Components/HomeScreenComponents/DaySessions/DaySessions';
import {Calendar} from '../Components/Calendar/Calendar';


export const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Calendar/>
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
