import { combineReducers } from "redux";
import { UserActions } from "./user/userActions";
import { IUserState, userReducer } from "./user/userReducer";
import { configureStore } from "@reduxjs/toolkit";

export interface RootState {
    userState: IUserState;
}

const rootReducer = combineReducers<RootState>({
    userState: userReducer
});

export type RootActions = 
    | UserActions;

export const store = configureStore({
    reducer: rootReducer
})