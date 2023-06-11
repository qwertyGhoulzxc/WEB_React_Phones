import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import {IButtonsState} from './types/ButtonsState.interface'

const initialState:IButtonsState ={
    catalogBtn:false,
    checkedColors:[],
    checkedMemory:[]
}

const ButtonsStateSlice = createSlice({
    name:'ButtonsState',
    initialState,
    reducers:{
        setCatalogBtnState:(state,action:PayloadAction<boolean>)=>{state.catalogBtn =action.payload},
        setCheckedColors:(state,action)=>{state.checkedColors=action.payload},
        setCheckedMemory:(state,action)=>{state.checkedMemory=action.payload},
    }
})


export const BtnStateReducer = ButtonsStateSlice.reducer
export const BtnStateActions = ButtonsStateSlice.actions