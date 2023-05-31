import { Middleware, combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import {BtnStateReducer} from './reducers/Buttons.state';
import {LoadingReducer} from './reducers/Loading.slice'
import {UserInfoReducer} from './reducers/user.slice'

// const removeMutationResultFilter: Middleware<any> = (store) => (next) => (action) => {
//     if (action.type === 'api/users/mutations/removeMutationResult') {
//       return;
//     }
//     return next(action);
//   };

const rootReducer = combineReducers({
    BtnStateReducer,
    LoadingReducer,
    UserInfoReducer
})

export const store= configureStore({
        reducer:rootReducer ,
     })

    setupListeners(store.dispatch)

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = typeof store
export type AppDispatch = AppStore['dispatch']


//добавить поле isReg
