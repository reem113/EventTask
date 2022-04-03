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
        marginHorizontal: '5%'
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    text: {
        color: 'black'
    }
})

export default Frienditem;
