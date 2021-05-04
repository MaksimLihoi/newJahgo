import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {AppColors} from '../../../assets/styles/Colors';


export const DaySessions = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your sessions</Text>
            <View style={styles.contentContainer}>
                <Text style={styles.instruction}>To add a session click</Text>
                <Text style={styles.instruction}>on the plus button</Text>
            </View>
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
        paddingTop: '2%',
        color: AppColors.MAIN_COLOR,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingBottom: '25%',
    },
    instruction: {
        color: AppColors.MAIN_COLOR,
        fontSize: 24,
        opacity: 0.4,
        alignSelf: 'center',
    },
});
