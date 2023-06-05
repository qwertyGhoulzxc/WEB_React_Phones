import { createSlice } from "@reduxjs/toolkit";

const initialState={

}

const phonesData = createSlice({
    name:'phonesData',
initialState,
reducers:{
    
}
})

export const phonesDataReducer = phonesData.reducer;
export const phonesDataActions = phonesData.actions;