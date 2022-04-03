import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import EventInfo from './EventInfo';
import Actionbutton from './ActionButton';

import IMAGES from '../../../assets/images'

const Topsection = () => {
    return (
        <View style={styles.wrapper}>
            <Image
                style={styles.img}
                source={IMAGES.eventImage} />
            <EventInfo />
            <Actionbutton />
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    img: {
        width: '100%',
        height: 400,
        resizeMode: "cover",
        marginBottom: 16
    }
})

export default Topsection;
