import * as React from "react";
import { IEstateFormProps } from "./IEstateFormProps";
import { ChangeEvent, FormEvent, useState } from "react";
import { IEstate } from "../../common/interfaces";
import Input from "../input/Input";
import { nameof } from "ts-simple-nameof";
import styles from "./EstateForm.module.scss";
import controls from "../../assets/styles/controls.module.scss";

const EstateForm: React.FC<IEstateFormProps> = (props) => {
  const { onSubmit, title, estate: initial, buttonText } = props;

  const initialValues = {
    title: "",
    description: "",
    price: 0,
    address: "",
    image: "",
    city: "",
    bedrooms: 0,
    email: "",
    userId: "",
  };

  const [estate, setEstate] = useState<IEstate>(
    initial ? { ...initial } : initialValues
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setEstate({ ...estate, [name]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    onSubmit(estate);
  };

  return (
    <>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <h1>{title}</h1>
        <Input
          label="Title"
          name={nameof<IEstate>((u) => u.title)}
          value={estate.title}
          onChange={handleChange}
          required
        />
        <Input
          label="Description"
          name={nameof<IEstate>((u) => u.description)}
          value={estate.description}
          onChange={handleChange}
          required
        />
        <Input
          label="Price"
          name={nameof<IEstate>((u) => u.price)}
          value={estate.price}
          onChange={handleChange}
          type="number"
          required
        />
        <Input
          label="Address"
          name={nameof<IEstate>((u) => u.address)}
          value={estate.address}
          onChange={handleChange}
          required
        />
        <Input
          label="Image"
          name={nameof<IEstate>((u) => u.image)}
          value={estate.image}
          onChange={handleChange}
          required
        />
        <Input
          label="City"
          name={nameof<IEstate>((u) => u.city)}
          value={estate.city}
          onChange={handleChange}
          required
        />
        <Input
          label="Bedrooms"
          name={nameof<IEstate>((u) => u.bedrooms)}
          value={estate.bedrooms}
          onChange={handleChange}
          type="number"
          required
        />
        <Input
          label="Email"
          name={nameof<IEstate>((u) => u.email)}
          value={estate.email}
          onChange={handleChange}
          required
          disabled={!!initial}
        />
        <button type="submit" className={controls.button}>
          {buttonText}
        </button>
      </form>
    </>
  );
};

export default EstateForm;
