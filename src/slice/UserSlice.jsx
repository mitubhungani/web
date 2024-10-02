import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:'user',
    initialState:{
        user:JSON.parse(localStorage.getItem("user")) || {},
        isLoggedIn:false
    }
})

export const userReducer = userSlice.reducer