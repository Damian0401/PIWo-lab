import { IEstate } from "../../common/interfaces";

export interface IEstateFormProps {
    estate?: IEstate;
    title: string;
    buttonText: string;
    onSubmit: (estate: IEstate) => void;
}