import {
  Action,
  Middleware,
  ThunkAction,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { BtnStateReducer } from "./reducers/Buttons.state";
import { LoadingReducer } from "./reducers/Loading.slice";
import { UserInfoReducer } from "./reducers/user.slice";
import { createWrapper } from "next-redux-wrapper";
import { phonesDataReducer } from "./reducers/phones.slice";

// const removeMutationResultFilter: Middleware<any> = (store) => (next) => (action) => {
//     if (action.type === 'api/users/mutations/removeMutationResult') {
//       return;
//     }
//     return next(action);
//   };

const rootReducer = combineReducers({
  BtnStateReducer,
  LoadingReducer,
  UserInfoReducer,
  phonesDataReducer,
});

export function setupStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
export const store = setupStore();
// export type RootState = ReturnType<typeof rootReducer>
// export type AppStore = typeof store
// export type AppDispatch = AppStore['dispatch']

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(setupStore);
//добавить поле isReg
