import { IFavorites } from "../../interfaces";


export enum FavoritesActionTypes {
    TOGGLE_FAVORITE = "TOGGLE_FAVORITE",
}

export const toggleFavorite = (userId: string, estateId: string) => ({
    type: FavoritesActionTypes.TOGGLE_FAVORITE,
    payload: { userId: userId, estateId: estateId },
});
interface IToggleFavoriteAction {
    type: FavoritesActionTypes.TOGGLE_FAVORITE;
    payload: { userId: string, estateId: string };
}

export const isFavorite = (userId: string, estateId: string, favorities: IFavorites[]) => {
    const favorite = favorities.find(favorite => favorite.userId === userId);

    if (!favorite) {
        return false;
    }

    return favorite.estates.includes(estateId);
}        

export type FavoritesActions =
    | IToggleFavoriteAction;