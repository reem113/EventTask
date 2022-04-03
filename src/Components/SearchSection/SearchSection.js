import React from 'react';
import { View, StyleSheet } from 'react-native';

import SearchBar from './SearchBar';
import Friendlist from './FriendsList/FriendList';

const Searchsection = () => {
    return (
        <View>
            <SearchBar />
            <Friendlist />
        </View>
    );
}

const styles = StyleSheet.create({})

export default Searchsection;
