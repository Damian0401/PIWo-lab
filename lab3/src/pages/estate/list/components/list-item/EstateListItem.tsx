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

const EstateListItem: React.FC<IEstateListItemProps> = ({ estate }) => {
  const { user } = useSelector((state: RootState) => state.userState);
  const { favorites } = useSelector((state: RootState) => state.favoritesState);
  const dispatch = useDispatch();

  const handleToggleFavorite = () => {
    if (!user) return;
    dispatch(toggleFavorite(user.email, estate.id));
  };

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
        <Link to={`/estate/${estate.id}`}>
          <button className={controls.button}>Book Meeting</button>
        </Link>
      </div>
      {user && (
        <div className={styles.favorite} onClick={handleToggleFavorite}>
          {isFavorite(user.email, estate.id, favorites) ? (
            <MdFavorite />
          ) : (
            <MdFavoriteBorder />
          )}
        </div>
      )}
    </div>
  );
};

export default EstateListItem;
