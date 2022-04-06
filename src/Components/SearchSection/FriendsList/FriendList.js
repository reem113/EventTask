import React from 'react';

import { View, StyleSheet, ScrollView, FlatList } from 'react-native';
import { useSelector } from 'react-redux';


import Frienditem from './FriendItem';

const Friendlist = () => {
    const posts = useSelector(state => state.posts);
    console.log(posts);
    return (
        <View>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} horizontal>
                <View style={styles.container}>
                    {posts.map((item) =>
                        <View key={item.id}>
                            <Frienditem title={item.id} />
                        </View>)}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row"
    }
})

export default Friendlist;
