import * as React from "react";
import { RootState } from "../../../common/state/store";
import { useSelector } from "react-redux";
import { IEstateFavoritesProps } from "./IEstateFavoritesProps";
import EstateList from "../list/EstateList";
import { isFavorite } from "../../../common/state/favorites/favoritesActions";
import { useAuth } from "../../../common/api/services/UserService";

const EstateFavorites: React.FC<IEstateFavoritesProps> = ({ estates }) => {
  const { favorites } = useSelector((state: RootState) => state.favoritesState);
  const { user } = useAuth();

  const favoriteEstates = user?.uid
    ? estates.filter((estate) =>
        estate.id ? isFavorite(user.uid, estate.id, favorites) : false
      )
    : [];

  return <EstateList estates={favoriteEstates} />;
};

export default EstateFavorites;
