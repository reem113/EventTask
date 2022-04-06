import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import IMAGES from '../../../assets/images';

const Actionbutton = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.img}
                source={IMAGES.sale} />
            <View style={styles.textwrapper}>
                <Text style={styles.text}>Refer a Friend via Qr code</Text>
                <Text style={styles.hint}>Get 50% Discount Coupon</Text>
            </View>
            <Image
                style={styles.icon}
                source={IMAGES.forwardArrow}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e9e9e9',
        flex: 1,
        flexDirection: "row",
        borderRadius: 10,
        justifyContent: "space-around",
        alignItems: "center",
        padding: 5,
        marginHorizontal: '5%',
        marginVertical: 10
    },
    img: {
        width: 70,
        height: 70,
        borderRadius: 35,
        resizeMode: "cover"
    },
    text: {
        fontWeight: "500",
        color: "black",
        fontSize: 16,

    },
    hint: {
        fontSize: 12,
        textAlign: "center",
        color: '#7f7f7f'
    },
    icon: {
        width: 25,
        height: 25,
        borderRadius: 50,
        resizeMode: "contain"
    }
})

export default Actionbutton;
