import * as React from "react";
import { IEstateListItemProps } from "./IEstateListItemProps";
import { Link } from "react-router-dom";
import styles from "./EstateListItem.module.scss";
import controls from "../../../../../assets/styles/controls.module.scss";

const EstateListItem = ({ estate }: IEstateListItemProps) => {
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
    </div>
  );
};

export default EstateListItem;
