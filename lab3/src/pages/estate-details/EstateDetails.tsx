import * as React from 'react';
import { IEstateDetailsProps } from './IEstateDetails';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './EstateDetails.module.scss';
import BookModal from './components/book-modal/BookModal';
import { IMessage } from '../../interfaces/IMessage';
import { toast } from 'react-toastify';


const EstateDetails = ({ estate, selectEstate }: IEstateDetailsProps) => {

    const { id } = useParams<{ id: string }>();

    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        selectEstate(Number(id));
    }, [id, selectEstate]);

    const handleBook = () => {
        setIsModalOpen(true);
    }

    const handleSend = (message: IMessage) => {
        const isSuccess = Math.random() > 0.5;

        if (!isSuccess) {
            toast.error('Message not sent!');
            return;
        }

        toast.success('Message sent!');
    }

    const handleClose = () => {
        setIsModalOpen(false);
    }

    if (!estate) return <div>Loading...</div>

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
                        <p>Description:</p>
                        <span>{estate.description}</span>
                    </div>
                    <button onClick={handleBook}>Book</button>
                </div>
                <img
                    className={styles.detailsImage}
                    src={estate.image}
                    alt={estate.title}
                />
            </div>
            {isModalOpen && <BookModal
                onSend={handleSend}
                onClose={handleClose}
            />}
        </div>
    );
}

export default EstateDetails;