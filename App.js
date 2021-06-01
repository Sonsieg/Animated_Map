/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useRef, useState } from 'react';
import {LogBox, StyleSheet, Text, TextInput, View, YellowBox} from 'react-native';
import Ball from './src/components/Ball';
import io from "socket.io-client";


LogBox.ignoreLogs(['Warning: ...'])
const App = () => {
  const [mess,setMes]=useState("Hello sockets")
  const socket =useRef(null)
  useEffect(() => {
    socket.current=io("http://192.168.0.104:3001")
   //
  }, [])
  const sendMessage =(text)=>{
    setMes(text)
    socket.current.emit("message",mess)
  }
  return (
    <View style={styles.container}>
      <TextInput placeholder="input" value={mess} onChangeText={(text)=>sendMessage(text)}/>
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
});
