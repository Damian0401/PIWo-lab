import { IEstate } from "../../../common/interfaces";

export interface IEstateDetailsProps {
    estate?: IEstate;
    selectEstate: (id: string) => void;
}