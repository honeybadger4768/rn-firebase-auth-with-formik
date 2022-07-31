import React, { useEffect, useState } from "react";
import { addDoc, collection, doc, firestore, getDoc, getDocs, register, setDoc } from "./firebase";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Formik } from "formik";

const App = () =>{
  const [state, setState] = useState({
    isLogged: false,
    username: ""
  })

  useEffect(() =>{

  }, [])

  const onSubmit = async ({fullName, username, email, password}, {resetForm}) =>{
    const res = await register({fullName, username, email, password})
    if(res){
      setState(st => {
        return {...st, isLogged: true, username: username}
      })
      resetForm()
    }
  }

  return (
    <View style={{flex: 1, alignItems: "center"}}>
      <Formik initialValues={{
        username: "",
        email: "",
        password: "",
        fullName: ""
      }} onSubmit={onSubmit}>
        {({handleChange, handleSubmit, values}) =>(
          <>
            <TextInput
              style={styles.inputs}
              value={values.username}
              onChangeText={handleChange("username")}
              placeholder={"Username"}
            />
            <TextInput
              style={styles.inputs}
              value={values.email}
              onChangeText={handleChange("email")}
              placeholder={"Email"}
            />
            <TextInput
              style={styles.inputs}
              value={values.fullName}
              onChangeText={handleChange("fullName")}
              placeholder={"Full Name"}
            />
            <TextInput
              style={styles.inputs}
              value={values.password
            } onChangeText={handleChange("password")}
              placeholder={"Password"}
              secureTextEntry={true}
            />
            <TouchableOpacity onPress={handleSubmit} style={styles.btn}>
              <Text>KAYIT OL!</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
      <Text style={{marginVertical: 10}}>{state.isLogged ? "Başarıyla kayıt oldunuz!" : "Lütfen kayıt olunuz!"}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  inputs: {
    width: "90%",
    height: 50,
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 10
  },
  btn: {
    width: "80%",
    height: 75,
    backgroundColor: "#ddd",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default App
