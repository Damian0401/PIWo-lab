import * as React from "react";
import { RootState } from "../../../common/state/store";
import { useSelector } from "react-redux";
import { IEstateFavoritesProps } from "./IEstateFavoritesProps";
import EstateList from "../list/EstateList";
import { isFavorite } from "../../../common/state/favorites/favoritesActions";
import { useAuth } from "../../../common/api/services/userService";

const EstateFavorites: React.FC<IEstateFavoritesProps> = ({ estates }) => {
  const { favorites } = useSelector((state: RootState) => state.favoritesState);
  const { user } = useAuth();

  const favoriteEstates = user?.uid
    ? estates.filter((estate) => isFavorite(user.uid, estate.id, favorites))
    : [];

  return <EstateList estates={favoriteEstates} />;
};

export default EstateFavorites;
