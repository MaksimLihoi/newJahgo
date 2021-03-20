import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {AppColors} from '../../assets/styles/Colors';


export const DaySessions = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your sessions</Text>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        alignItems: 'center',
        width: '100%',
        height: '45%',
        borderRadius: 35,
        backgroundColor: AppColors.WHITE_COLOR,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: AppColors.MAIN_COLOR,
    },
});
