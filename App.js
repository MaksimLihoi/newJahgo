import React from 'react';
import {
    StyleSheet,
    ImageBackground,
    View,
    Image
} from 'react-native';
import {HomeScreen} from './src/screens/HomeScreen';

const backgroundImage = require('./src/assets/images/gradient-background-19.png');

const App = () => {

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.background}
                             source={backgroundImage}>
                <HomeScreen/>
            </ImageBackground>
        </View>
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
    test: {
        width: 100,
        height: 100,
    }
});

export default App;
