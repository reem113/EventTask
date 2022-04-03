import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Optionslist from '../Components/OptionsList'

const OptionsScreen = () => {
    return (
        <View style={styles.optionsview}>
            <Optionslist />
        </View>
    )
}

export default OptionsScreen

const styles = StyleSheet.create({
    optionsview: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    }
})