import { IFavorites } from "../../interfaces";
import { FavoritesActionTypes, FavoritesActions } from "./favoritesActions";

export interface IFavoritesState {
    favorites: IFavorites[];
}

const favorites = localStorage.getItem("favorites") 
    ? JSON.parse(localStorage.getItem("favorites")!)
    : [];
const initialState: IFavoritesState = {
    favorites: favorites,
}

export const favoritesReducer = (state: IFavoritesState = initialState, action: FavoritesActions): IFavoritesState => {
    switch (action.type) {
        case FavoritesActionTypes.TOGGLE_FAVORITE: {
            const favorite = state.favorites.find(favorite => favorite.userId === action.payload.userId);

            if (favorite) {
                let estates = [...favorite.estates]
                const filteredEstates = estates.filter(estateId => estateId !== action.payload.estateId);
                if (filteredEstates.length === favorite.estates.length) {
                    estates.push(action.payload.estateId);
                } else {
                    estates = filteredEstates;
                }
                localStorage.setItem("favorites", JSON.stringify(state.favorites));
                return {
                    ...state,
                    favorites: [...state.favorites.filter(x => x.userId !== action.payload.userId), {userId: action.payload.userId, estates}],
                }
            }

            const newFavorite: IFavorites = {
                userId: action.payload.userId,
                estates: [action.payload.estateId],
            }
            localStorage.setItem("favorites", JSON.stringify([...state.favorites, newFavorite]));
            return {
                ...state,
                favorites: [...state.favorites, newFavorite],
            }
        }
        default:
            return state
    }
}