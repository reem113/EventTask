import React from 'react';
import { View, StyleSheet } from 'react-native';

import Listitem from './ListItem';
import IMAGES from '../../../assets/images';

const Detailslist = () => {
    return (
        <View>
            <Listitem imgPath={IMAGES.organizers} listContent={'Organizers'} />
            <Listitem imgPath={IMAGES.location} listContent={'Place'} />
            <Listitem imgPath={IMAGES.time} listContent={'Time : 5:30pm 7:30pm'} />
            <Listitem imgPath={IMAGES.organizers} listContent={'Date'} />
            <Listitem imgPath={IMAGES.location} listContent={'Price'} />
            <Listitem imgPath={IMAGES.time} listContent={'Online or Inperson'} />
        </View>
    );
}

const styles = StyleSheet.create({})

export default Detailslist;
