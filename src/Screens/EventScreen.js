import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { View, ScrollView, StyleSheet } from 'react-native';

import Topsection from '../Components/TopSection/TopSection';
import Seperator from '../Components/Seperator';
import Detailslist from '../Components/DetailsList/DetailsList';
import EventDetails from '../Components/EventDetails';
import Searchsection from '../Components/SearchSection/SearchSection';

import { getPosts } from '../Redux/Action/Posts';
import axios from 'axios';




const EventScreen = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/posts',

        })
            .then(response => {

                dispatch(getPosts(response?.data));
            })
    }, []);
    return (
        <ScrollView style={styles.container}>

            <Topsection />
            <Seperator />
            <Detailslist />
            <Seperator />
            <EventDetails />
            <Seperator />
            <Searchsection />




        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    }
})

export default EventScreen;
