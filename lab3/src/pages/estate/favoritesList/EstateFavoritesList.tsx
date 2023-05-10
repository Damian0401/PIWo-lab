import * as React from "react";
import { RootState } from "../../../common/state/store";
import { useSelector } from "react-redux";
import { IEstateFavoritesListProps } from "./IEstateFavoritesListProps";
import { Navigate } from "react-router-dom";
import EstateList from "../list/EstateList";
import { isFavorite } from "../../../common/state/favorites/favoritesActions";

const EstateFavoritesList: React.FC<IEstateFavoritesListProps> = ({
  estates,
}) => {
  const { favorites } = useSelector((state: RootState) => state.favoritesState);
  const { user } = useSelector((state: RootState) => state.userState);

  if (!user) return <Navigate to="/login" />;

  const favoriteEstates = estates.filter((estate) =>
    isFavorite(user.email, estate.id, favorites)
  );

  return <EstateList estates={favoriteEstates} />;
};

export default EstateFavoritesList;
