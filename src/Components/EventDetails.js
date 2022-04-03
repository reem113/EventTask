import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EventDetails = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>More About Event</Text>
            <Text style={styles.text}>This body of work features so many intricate musical layers, we have brought in one of the UK's
                leading Orchestras to perform a complete rendition of the album and some of Dre's west coast classics
                from start to finish. Accompanied by DJ's, singers,and lyricists -
                this is not your average Orchestral event.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginHorizontal: '5%',
        marginBottom: 50
    },
    header: {
        color: "black",
        fontSize: 20,
        fontWeight: "400",
        marginBottom: 10,
        fontFamily: 'sans-serif',
    },
    text: {
        color: "black",
        fontFamily: 'sans-serif',
    }

})

export default EventDetails;
