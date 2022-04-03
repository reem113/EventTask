import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Listitem = ({ imgPath, listContent }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.img}
                source={imgPath} />
            <Text style={styles.text}>{listContent}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 5,
        marginHorizontal: '5%'

    },
    img: {
        width: 15,
        height: 15,
        marginRight: 12,
        resizeMode: "contain"


    },
    text: {
        color: "black"
    }
})

export default Listitem;
