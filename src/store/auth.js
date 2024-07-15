
import {createSlice} from "@reduxjs/toolkit";

const initialAuthentication={
    isAuthentificated:false
}

const authSlice=createSlice({
    name: "authentication",
    initialState:initialAuthentication,
    reducers:{
        login(state){
            state.isAuthentificated=true
        },
        logout(state){
            state.isAuthentificated=false
        }
    }
})
export const  authActions =authSlice.actions;
export default authSlice.reducer;