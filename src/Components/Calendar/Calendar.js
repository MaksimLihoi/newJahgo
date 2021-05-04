import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {observer} from 'mobx-react';



export const Calendar = observer(() => {
    return (
        <View style={styles.container}>
            <Text>Calendar</Text>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
