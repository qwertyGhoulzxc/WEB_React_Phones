import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import { dataApi } from "./reducers/dataApi.redux";
import {BtnStateReducer} from './reducers/Buttons.state'

const rootReducer = combineReducers({
    [dataApi.reducerPath]:dataApi.reducer,
    BtnStateReducer,
    
})

export const store= configureStore({
        reducer:rootReducer ,
        middleware:getDefaultMiddleware =>
        getDefaultMiddleware().concat(dataApi.middleware)
    })

    setupListeners(store.dispatch)

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = typeof store
export type AppDispatch = AppStore['dispatch']


//добавить поле isReg
