import { IFavorites } from "../../interfaces";


export enum FavoritesActionTypes {
    TOGGLE_FAVORITE = "TOGGLE_FAVORITE",
}

export const toggleFavorite = (userId: string, estateId: number) => ({
    type: FavoritesActionTypes.TOGGLE_FAVORITE,
    payload: { userId: userId, estateId },
});
interface IToggleFavoriteAction {
    type: FavoritesActionTypes.TOGGLE_FAVORITE;
    payload: { userId: string, estateId: number };
}

export const isFavorite = (user: string, estateId: number, favorities: IFavorites[]) => {
    const favorite = favorities.find(favorite => favorite.userId === user);

    if (!favorite) {
        return false;
    }

    return favorite.estates.includes(estateId);
}        

export type FavoritesActions =
    | IToggleFavoriteAction;