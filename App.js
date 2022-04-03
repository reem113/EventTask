import 'react-native-gesture-handler';

import React from 'react';
import { StyleSheet, Image, Pressable, View } from 'react-native';

import EventScreen from './src/Screens/EventScreen';
import HomeScreen from './src/Screens/HomeScreen';
import EditScreen from './src/Screens/EditScreen';
import ProfileScreen from './src/Screens/profileScreen';
import OptionsScreen from './src/Screens/OptionsScreen';

import IMAGES from './assets/images';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native'; //contains navigator and screen
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const Tab = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: 'rgb(78, 78, 78)'
  },
};




const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#b22126',
          tabBarInactiveTintColor: 'gray',
        })}
      >


        <Tab.Screen
          name='Favourites'
          component={HomeScreen}
          options={{
            tabBarIcon: () => (<Image style={styles.icon} source={IMAGES.coloredFavourite} />)
          }} />

        <Tab.Screen
          name='Upcoming'
          component={EditScreen}
          options={{
            tabBarIcon: () => (<Image style={styles.icon} source={IMAGES.time} />)
          }} />

        <Tab.Screen
          name='Track Event'
          component={ProfileScreen}
          options={{
            tabBarIcon: () => (<Image style={styles.icon} source={IMAGES.location} />),
          }} />

        <Tab.Screen
          name="Event"
          component={EventScreen}
          options={({ navigation }) => ({

            title: "Events",
            headerTintColor: 'rgb(78, 78, 78)',
            headerTitleAlign: "center",
            headerLeft: () => (
              <Pressable onPress={() => navigation.goBack}>
                <Image
                  style={styles.backicon}
                  source={IMAGES.backArrow}
                />
              </Pressable>
            )
            ,
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('OptionsScreen')}>
                <Image
                  style={styles.editicon}
                  source={IMAGES.headerEdit} />
              </Pressable>

            ),
            tabBarIcon: () => < Image style={styles.icon} source={IMAGES.organizers} />
          })}
        />


      </Tab.Navigator>


    </NavigationContainer >
  );
}

const styles = StyleSheet.create({
  backicon: {
    width: 20,
    height: 20,
    marginLeft: 12
  },
  editicon: {
    height: 10,
    width: 30,
    marginRight: 12
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: "contain",

  }


})

export default App;


