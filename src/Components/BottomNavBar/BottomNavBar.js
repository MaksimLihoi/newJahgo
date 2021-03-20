import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity, ImageBackground} from 'react-native';
import {AddNewSessionButton} from './AddNewSessionButton/AddNewSessionButton';

const barImage = require('../../assets/images/bar-19.png');
const calendarImage = require('../../assets/images/calendar-19.png');
const statisticsImage = require('../../assets/images/statistics-19.png');
const searchImage = require('../../assets/images/search-19.png');
const recommendationsImage = require('../../assets/images/recommendations-19.png');


export const BottomNavBar = () => {
    return (
        <View style={styles.container}>
            <AddNewSessionButton/>
            <View style={styles.barContainer}>
                <ImageBackground source={barImage} style={styles.barImage}>
                    <View style={{...styles.buttonsContainer, marginLeft: '8%'}}>
                        <TouchableOpacity style={styles.button}>
                            <Image source={recommendationsImage} style={styles.buttonImage}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Image source={searchImage} style={styles.buttonImage}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{...styles.buttonsContainer, marginRight: '8%'}}>
                        <TouchableOpacity style={styles.button}>
                            <Image source={statisticsImage} style={styles.buttonImage}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Image source={calendarImage} style={styles.buttonImage}/>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'column',
    },
    barContainer: {
        position: 'absolute',
        zIndex: 1,
        width: '140%',
        height: '9%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    barImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowOffset: { width: 2, height: 2 },
        elevation: 8,
    },
    buttonsContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '20%',
    },
    buttonImage: {
        width: 40,
        height: 40,
    },
});
