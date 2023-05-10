import { IEstate } from "../../../interfaces/IEstate";

export interface IEstateDetailsProps {
    estate?: IEstate;
    selectEstate: (id: number) => void;
}