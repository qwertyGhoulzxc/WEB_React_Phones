import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import {IButtonsState} from './types/ButtonsState.interface'

const initialState:IButtonsState ={
    catalogBtn:false
}

const ButtonsStateSlice = createSlice({
    name:'ButtonsState',
    initialState,
    reducers:{
        setCatalogBtnState:(state,action:PayloadAction<boolean>)=>{state.catalogBtn =action.payload}
    }
})


export const BtnStateReducer = ButtonsStateSlice.reducer
export const BtnStateActions = ButtonsStateSlice.actions