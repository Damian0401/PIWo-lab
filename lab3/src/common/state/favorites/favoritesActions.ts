import { IFavorites } from "../../../interfaces/IFavorites";


export enum FavoritesActionTypes {
    TOGGLE_FAVORITE = "TOGGLE_FAVORITE",
}

export const toggleFavorite = (userEmail: string, estateId: number) => ({
    type: FavoritesActionTypes.TOGGLE_FAVORITE,
    payload: { userEmail, estateId },
});
interface IToggleFavoriteAction {
    type: FavoritesActionTypes.TOGGLE_FAVORITE;
    payload: { userEmail: string, estateId: number };
}

export const isFavorite = (userEmail: string, estateId: number, favorities: IFavorites[]) => {
    const favorite = favorities.find(favorite => favorite.userEmail === userEmail);
    if (!favorite) {
        return false;
    }

    return favorite.estates.includes(estateId);
}        

export type FavoritesActions =
    | IToggleFavoriteAction;