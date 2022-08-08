import React from "react"
import { View, TextInput, Text, TouchableOpacity } from "react-native"
import { Formik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { login as flogin } from "../firebase"
import { login } from "../redux/authState"
import {styles} from "../styles"

const Login = () =>{

    const state = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const onSubmit = async ({ email, password}, {resetForm}) =>{
        const res = await flogin({email, password})
        if(res){
            dispatch(login(res.email))
            resetForm()
        }
      }

    return (
        <View style={{flex: 1, alignItems: "center"}}>
        <Formik initialValues={{
            email: "",
            password: ""
        }} onSubmit={onSubmit}>
            {({handleChange, handleSubmit, values}) =>(
            <>
                <TextInput
                style={styles.inputs}
                value={values.email}
                onChangeText={handleChange("email")}
                placeholder={"Email"}
                />
                <TextInput
                style={styles.inputs}
                value={values.password
                } onChangeText={handleChange("password")}
                placeholder={"Password"}
                secureTextEntry={true}
                />
                <TouchableOpacity onPress={handleSubmit} style={styles.btn}>
                <Text>GİRİŞ YAP!</Text>
                </TouchableOpacity>
            </>
            )}
        </Formik>
        <Text style={{marginVertical: 10}}>{state.isLogged ? "Başarıyla kayıt oldunuz!" : "Lütfen kayıt olunuz!"}</Text>
    </View>
    )
}

export default Login