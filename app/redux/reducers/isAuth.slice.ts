import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IIsAuth } from "./types/isAuth.interface";


const initialState:IIsAuth = {
    isAuth:false
}

const IsAuthSlice = createSlice({
    name:'IsAuth',
    initialState,
    reducers:{
        setAuthorized:(state,action:PayloadAction<boolean>)=>{state.isAuth=action.payload},
    }
})


export const IsAuthReducer = IsAuthSlice.reducer
export const IsAuthActions = IsAuthSlice.actions