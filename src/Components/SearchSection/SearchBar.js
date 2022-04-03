import React from 'react';
import { View, TextInput, Image, Text, StyleSheet } from 'react-native';
import IMAGES from '../../../assets/images';


const SearchBar = ({ term, onTermChange }) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={{ fontSize: 20 }}
                autoCorrect={false}
                autoCapitalize='none'
                value={term}
                onChangeText={newTerm => onTermChange(newTerm)}
                placeholder="Search Friends"
                placeholderTextColor="#b22126"

            />
            <Text style={styles.invite}>Invite Friend</Text>
            <Image
                style={styles.img}
                source={IMAGES.search} />


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderColor: '#B4B4B4',
        borderWidth: 1,
        borderRadius: 20,
        flexDirection: 'row',
        marginHorizontal: '5%',
        marginVertical: 12,
        paddingHorizontal: '5%',
        justifyContent: "space-between",
        position: "relative",



    },
    img: {
        width: 30,
        height: 30,
        position: "absolute",
        right: 120,
        top: 8

    },
    invite: {
        color: '#b22126',
        fontFamily: 'sans-serif',
        textAlignVertical: "center",
        fontSize: 16


    }

})

export default SearchBar;
