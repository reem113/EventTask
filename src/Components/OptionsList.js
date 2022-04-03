import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Seperator from './Seperator';

const Optionslist = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Edit Event</Text>
            <Seperator />
            <Text style={styles.text}>Cancel Event</Text>
            <Seperator />
            <Text style={styles.text}>Delete Event</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.2,
        justifyContent: "center",
        backgroundColor: '#b22126',
        width: '70%',
        padding: 10
    },
    text: {
        color: '#B4B4B4',
        textAlign: "center",
        textAlignVertical: "center",
        padding: 10
    }
})

export default Optionslist;
