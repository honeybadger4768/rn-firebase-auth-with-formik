import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Formik } from "formik"
import { register } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import {changeNav, login} from "../redux/authState"
import { styles } from "../styles";

const Register = () =>{
    const state = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const onSubmit = async ({fullName, username, email, password}, {resetForm}) =>{
        const res = await register({fullName, username, email, password})
        if(res){
          dispatch(login({username: username}))
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
        <TouchableOpacity style={styles.btn} onPress={() =>{
          dispatch(changeNav("login"))
        }}>
          <Text>LOGİNE GİT</Text>
        </TouchableOpacity>
    </View>
    )
}

export default Register