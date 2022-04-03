import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Numcard = ({ actionText, number }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{actionText}</Text>
            <Text style={styles.number}>{number}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 2,
        borderStyle: "solid",
        borderRadius: 10,
        borderColor: '#EFF1F0',
        paddingHorizontal: 10,
        paddingVertical: 5,
        margin: 5

    },
    text: {
        textAlign: "center",
        color: "black",
        fontSize: 14,
        fontFamily: 'sans-serif',


    },
    number: {
        textAlign: "center",
        color: '#b22126',
        fontSize: 20,
        fontFamily: 'sans-serif',

    }

})

export default Numcard;
