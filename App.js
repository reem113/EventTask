import 'react-native-gesture-handler';

import React from 'react';
import { StyleSheet, Image, Pressable, ToastAndroid } from 'react-native';

import EventScreen from './src/Screens/EventScreen';
import HomeScreen from './src/Screens/HomeScreen';
import EditScreen from './src/Screens/EditScreen';
import ProfileScreen from './src/Screens/profileScreen';

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




const App = (navigation) => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          // tabBarIcon: ({ color, size }) => {

          //   // You can return any component that you like here!
          //   return <FontAwesomeIcon icon="fa-solid fa-arrow-up-short-wide" />
          // },
          tabBarActiveTintColor: '#b22126',
          tabBarInactiveTintColor: 'gray',
        })}
      >

        <Tab.Screen name='Home' component={HomeScreen} />

        <Tab.Screen name='Edit' component={EditScreen} />

        <Tab.Screen name='Profile' component={ProfileScreen} />

        <Tab.Screen
          name="Event"
          component={EventScreen}
          options={{
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
              <Pressable onPress={() => console.log('hi')}>
                <Image
                  style={styles.editicon}
                  source={IMAGES.headerEdit} />
              </Pressable>
            )
          }}
        />


      </Tab.Navigator>


    </NavigationContainer >
  );
}

const styles = StyleSheet.create({
  backicon: {
    width: 24,
    height: 24,
    marginLeft: 12
  },
  editicon: {
    height: 10,
    width: 30,
    marginRight: 12
  }


})

export default App;


