import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import IMAGES from '../../../../assets/images';

const Frienditem = ({ title }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.img}
                source={IMAGES.girl} />
            <Text style={styles.text}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
        marginHorizontal: 10
    },
    img: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    text: {
        color: 'black'
    }
})

export default Frienditem;
