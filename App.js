import React from 'react';
import {
    StyleSheet,
    ImageBackground,
    SafeAreaView,
    StatusBar
} from 'react-native';
import {HomeScreen} from './src/screens/HomeScreen';

const backgroundImage = require('./src/assets/images/gradient-background-19.png');

const App = () => {

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent backgroundColor='transparent'/>
            <ImageBackground style={styles.background}
                             source={backgroundImage}>
                <HomeScreen/>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
});

export default App;
