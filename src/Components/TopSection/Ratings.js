import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import IMAGES from '../../../assets/images';

const Ratings = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.star}
                source={IMAGES.coloredFavourite} />
            <Image
                style={styles.star}
                source={IMAGES.coloredFavourite} />
            <Image
                style={styles.star}
                source={IMAGES.coloredFavourite} />
            <Image
                style={styles.star}
                source={IMAGES.coloredFavourite} />
            <Image
                style={styles.star}
                source={IMAGES.greyFavourite} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '50%',
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 12,
        marginTop: 12

    },
    star: {
        height: 25,
        width: 25,

    }
})

export default Ratings;
