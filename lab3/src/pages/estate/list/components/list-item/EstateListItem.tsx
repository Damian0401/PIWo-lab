import * as React from "react";
import { IEstateListItemProps } from "./IEstateListItemProps";
import { Link } from "react-router-dom";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import styles from "./EstateListItem.module.scss";
import controls from "../../../../../assets/styles/controls.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../common/state/store";
import {
  isFavorite,
  toggleFavorite,
} from "../../../../../common/state/favorites/favoritesActions";
import { useAuth } from "../../../../../common/api/services/UserService";

const EstateListItem: React.FC<IEstateListItemProps> = ({ estate }) => {
  const { user } = useAuth();
  const { favorites } = useSelector((state: RootState) => state.favoritesState);
  const dispatch = useDispatch();

  const handleToggleFavorite = () => {
    if (!user || !estate.id) return;
    dispatch(toggleFavorite(user.uid, estate.id));
  };

  const isEstateFavorite =
    user && estate.id ? isFavorite(user.uid, estate.id, favorites) : false;

  const isOwner = user?.uid === estate.userId;

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1>{estate.title}</h1>
        <p>Price: {estate.price}$</p>
        <p>Bedrooms: {estate.bedrooms}</p>
        <p>City: {estate.city}</p>
        <p>Description:</p>
        <span>{estate.description}</span>
      </div>
      <div className={styles.right}>
        {isOwner ? (
          <Link to={`/estate/${estate.id}/edit`}>
            <button className={controls.button}>Edit</button>
          </Link>
        ) : (
          <Link to={`/estate/${estate.id}`}>
            <button className={controls.button}>Book Meeting</button>
          </Link>
        )}
      </div>
      {user && !isOwner && (
        <div className={styles.favorite} onClick={handleToggleFavorite}>
          {isEstateFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
        </div>
      )}
    </div>
  );
};

export default EstateListItem;
