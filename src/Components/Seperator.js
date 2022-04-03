import React from 'react';
import { View, StyleSheet } from 'react-native';

const Seperator = () => {
    return (
        <View style={styles.separator}></View>
    );
}

const styles = StyleSheet.create({
    separator: {
        height: 1,
        width: "100%",
        backgroundColor: '#E1E1E1',
        alignSelf: 'center',
        marginVertical: 5,
    }
})

export default Seperator;
