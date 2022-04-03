import React from 'react';
import { View, StyleSheet } from 'react-native';

import Numcard from './NumCard';

const Cardsview = () => {
    return (
        <View style={styles.container}>
            <Numcard actionText={'Going'} number={"2k"} />
            <Numcard actionText={'Interested'} number={"76k"} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"

    }
})

export default Cardsview;
