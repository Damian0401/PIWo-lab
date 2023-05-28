import * as React from "react";
import { IEstateAddProps } from "./IEstateAddProps";
import { useNavigate } from "react-router-dom";
import { IEstate } from "../../../common/interfaces";
import { useAuth } from "../../../common/api/services/UserService";
import EstateForm from "../../../components/EstateForm/EstateForm";

const EstateAdd = ({ addEstate }: IEstateAddProps) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const initialEstate: IEstate | undefined = user?.email
    ? {
        title: "",
        description: "",
        price: 0,
        address: "",
        image: "",
        city: "",
        bedrooms: 0,
        email: user.email,
        userId: user.uid,
      }
    : undefined;

  const handleSubmit = (estate: IEstate): void => {
    addEstate(estate);
    navigate("/");
  };

  return (
    <EstateForm
      onSubmit={handleSubmit}
      title="Add Estate"
      estate={initialEstate}
      buttonText="Add"
    />
  );
};

export default EstateAdd;
