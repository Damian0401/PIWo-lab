import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { IFavoritesState, favoritesReducer } from "./favorites/favoritesReducer";
import { FavoritesActions } from "./favorites/favoritesActions";

export interface RootState {
    favoritesState: IFavoritesState;
}

const rootReducer = combineReducers<RootState>({
    favoritesState: favoritesReducer,
});

export type RootActions = 
    | FavoritesActions

export const store = configureStore({
    reducer: rootReducer
})