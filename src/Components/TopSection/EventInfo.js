import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Ratings from './Ratings';
import Cardsview from './InfoCards/CardsView';
const EventInfo = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.date}>JULY 16TH PM UTC + 04 - JULY 19TH</Text>
            <Text style={styles.header}>Buisness Development </Text>
            <Text style={styles.header}>Confrence Expert</Text>
            <Text style={styles.title}>Online Event</Text>
            <Ratings />
            <Cardsview />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    date: {
        color: "#b22126",
        fontWeight: "500",
        fontSize: 14,
        marginBottom: 5


    },
    header: {
        fontWeight: "600",
        fontSize: 24,
        color: "black",
        lineHeight: 25,


    },
    title: {
        color: "black",
        fontSize: 12,
        fontWeight: "600",
        lineHeight: 25,


    }
})

export default EventInfo;
