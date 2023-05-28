import * as React from "react";
import { IEstateAddProps } from "./IEstateAddProps";
import { ChangeEvent, FormEvent, useState } from "react";
import Input from "../../../components/input/Input";
import styles from "./EstateAdd.module.scss";
import controls from "../../../assets/styles/controls.module.scss";
import { useNavigate } from "react-router-dom";
import { nameof } from "ts-simple-nameof";
import { IEstate } from "../../../common/interfaces";
import { useAuth } from "../../../common/api/services/UserService";

const EstateAdd = ({ addEstate }: IEstateAddProps) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [estate, setEstate] = useState<IEstate>({
    title: "",
    description: "",
    price: 0,
    address: "",
    image: "",
    city: "",
    bedrooms: 0,
    email: user?.email || "",
    userId: user?.uid || "-1",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setEstate({ ...estate, [name]: value });
  };

  const handleChangeNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setEstate({ ...estate, [name]: Number(value) });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    addEstate(estate);
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <h1>Estate Add</h1>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
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
          onChange={handleChangeNumber}
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
          onChange={handleChangeNumber}
          type="number"
          required
        />
        <Input
          label="Email"
          name={nameof<IEstate>((u) => u.email)}
          value={estate.email}
          onChange={handleChange}
          required
          disabled
        />
        <button type="submit" className={controls.button}>
          Add
        </button>
      </form>
    </div>
  );
};

export default EstateAdd;
