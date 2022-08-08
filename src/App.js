import React, { useEffect, useState } from "react";
import { addDoc, collection, doc, firestore, getDoc, getDocs, register, setDoc } from "./firebase";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Login from "./components/Login.js";
import Register from "./components/Register";
import { useSelector } from "react-redux";

const App = () =>{
  
  const state = useSelector(s => s.auth)

  useEffect(() =>{
    console.log(state.isLogged)
  }, [state])


  return (
    <View style={{}}>
        {state.nav === "register" ? 
        <Register /> : state.nav === "login" ? <Login /> : state.nav === "main" && state.isLogged ? <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text style={{fontSize: 20, color: "black"}}>Başarıyla giriş yaptınız!</Text>
     </View> : null}
    </View>
  )
}

export default App
