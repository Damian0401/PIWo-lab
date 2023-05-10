import { combineReducers } from "redux";
import { UserActions } from "./user/userActions";
import { IUserState, userReducer } from "./user/userReducer";
import { configureStore } from "@reduxjs/toolkit";
import { IFavoritesState, favoritesReducer } from "./favorites/favoritesReducer";
import { FavoritesActions } from "./favorites/favoritesActions";

export interface RootState {
    userState: IUserState;
    favoritesState: IFavoritesState;
}

const rootReducer = combineReducers<RootState>({
    userState: userReducer,
    favoritesState: favoritesReducer,
});

export type RootActions = 
    | UserActions
    | FavoritesActions

export const store = configureStore({
    reducer: rootReducer
})