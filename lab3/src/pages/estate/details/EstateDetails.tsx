import * as React from "react";
import { IEstateDetailsProps } from "./IEstateDetails";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./EstateDetails.module.scss";
import controls from "../../../assets/styles/controls.module.scss";
import BookModal from "./components/book-modal/BookModal";
import { toast } from "react-toastify";
import { IMessage } from "../../../common/interfaces";
import { useAuth } from "../../../common/api/services/userService";

const EstateDetails = ({ estate, selectEstate }: IEstateDetailsProps) => {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    selectEstate(Number(id));
  }, [id, selectEstate]);

  const handleBook = () => {
    setIsModalOpen(true);
  };

  const handleSend = (message: IMessage) => {
    const isSuccess = Math.random() > 0.5;

    if (!isSuccess) {
      toast.error("Message not sent!");
      return;
    }

    toast.success("Message sent!");
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  if (!estate) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>{estate.title}</h1>
      </div>
      <div className={styles.details}>
        <div className={styles.detailsText}>
          <div>
            <p>Price:</p>
            <p>{estate.price}$</p>
            <p>Address:</p>
            <p>{estate.address}</p>
            <p>City:</p>
            <p>{estate.city}</p>
            <p>Bedrooms:</p>
            <p>{estate.bedrooms}</p>
            <p>Email:</p>
            <p>{estate.email}</p>
            <p>Description:</p>
            <span>{estate.description}</span>
          </div>
          <div className={!user ? styles.loginNeeded : styles.loginNotNeeded}>
            <span>You need to login first</span>
            <button
              onClick={handleBook}
              className={controls.button}
              disabled={!user}
            >
              Book
            </button>
          </div>
        </div>
        <img
          className={styles.detailsImage}
          src={estate.image}
          alt={estate.title}
        />
      </div>
      {isModalOpen && <BookModal onSend={handleSend} onClose={handleClose} />}
    </div>
  );
};

export default EstateDetails;
