import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "@store";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from "@screens/Homepage";
import { StatusBar } from 'react-native';
import { Chatbox } from '@screens/Chatbox';
import ImportMessages from '@screens/ImportMessages';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Homepage" screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#161616' }, animation: 'slide_from_right'}}>
          <Stack.Screen name="Homepage" component={Homepage}></Stack.Screen>
          <Stack.Screen name="Chatbox" component={Chatbox}></Stack.Screen>
          <Stack.Screen name="Import Messages" component={ImportMessages}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar backgroundColor={"#161616"}></StatusBar>
    </Provider>
  )
}