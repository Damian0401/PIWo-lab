import { IFavorites } from "../../../interfaces/IFavorites";
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
            const favorite = state.favorites.find(favorite => favorite.userEmail === action.payload.userEmail);

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
                    favorites: [...state.favorites.filter(x => x.userEmail !== action.payload.userEmail), {userEmail: action.payload.userEmail, estates}],
                }
            }

            const newFavorite: IFavorites = {
                userEmail: action.payload.userEmail,
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