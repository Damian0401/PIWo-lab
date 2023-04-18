import * as React from 'react';
import { IEstateAddProps } from './IEstateAddProps';
import { ChangeEvent, FormEvent, useState } from 'react';
import Input from '../../components/input/Input';
import styles from './EstateAdd.module.scss';
import { IEstate } from '../../interfaces/IEstate';
import { useNavigate } from 'react-router-dom';

const EstateAdd = ({ addEstate }: IEstateAddProps) => {

    const navigate = useNavigate();

    const [estate, setEstate] = useState<IEstate>({
        id: -1,
        title: '',
        description: '',
        price: 0,
        address: '',
        image: '',
        city: '',
        bedrooms: 0,
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        setEstate({ ...estate, [name]: value });
    }

    const handleChangeNumber = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        setEstate({ ...estate, [name]: Number(value) });
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        addEstate(estate);
        navigate('/');
    }

    return (
        <div className={styles.container}>
            <h1>Estate Add</h1>
            <form className={styles.formContainer} onSubmit={handleSubmit}>
                <Input
                    label="Title"
                    name="title"
                    value={estate.title}
                    onChange={handleChange}
                    required={true}
                />
                <Input
                    label="Description"
                    name="description"
                    value={estate.description}
                    onChange={handleChange}
                    required={true}
                />
                <Input
                    label="Price"
                    name="price"
                    value={estate.price}
                    onChange={handleChangeNumber}
                    type='number'
                    required={true}
                />
                <Input
                    label="Address"
                    name="address"
                    value={estate.address}
                    onChange={handleChange}
                    required={true}
                />
                <Input
                    label="Image"
                    name="image"
                    value={estate.image}
                    onChange={handleChange}
                    required={true}
                />
                <Input
                    label="City"
                    name="city"
                    value={estate.city}
                    onChange={handleChange}
                    required={true}
                />
                <Input
                    label="Bedrooms"
                    name="bedrooms"
                    value={estate.bedrooms}
                    onChange={handleChangeNumber}
                    type='number'
                    required={true}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default EstateAdd;