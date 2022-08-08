import { configureStore } from "@reduxjs/toolkit";
import authState from "./authState";

export const store = configureStore({
    reducer: {
        auth: authState
    }
})