import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";


const authState = createSlice({
    name: "authState",
    initialState: {
        username: "",
        isLogged: false,
        nav: "register"
    },
    reducers: {
        login: (state, action) =>{
            console.log(action)
            state.username = action.payload
            state.isLogged = true
            nav = "main"
        },
        logout: (state) =>{
            state.username = "",
            state.isLogged = false
        },
        changeNav: (state, action) =>{
            state.nav = action.payload
        }
    }
})


export const { login, logout, changeNav } = authState.actions
export default authState.reducer