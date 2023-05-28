import * as React from "react";
import { IEstateEditProps } from "./IEstateEditProps";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { IEstate } from "../../../common/interfaces";
import EstateForm from "../../../components/EstateForm/EstateForm";

const EstateEdit: React.FC<IEstateEditProps> = (props) => {
  const { estate, editEstate, selectEstate } = props;

  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;

    selectEstate(id);
  }, [id, selectEstate]);

  const handleSubmit = (estate: IEstate): void => {
    editEstate(estate);
    navigate("/");
  };

  if (!estate) return <div>Loading...</div>;

  return (
    <EstateForm
      onSubmit={handleSubmit}
      title="Edit Estate"
      estate={estate}
      buttonText="Save"
    />
  );
};

export default EstateEdit;
