import { IEstate } from "../../../common/interfaces";

export interface IEstateEditProps {
    estate?: IEstate;
    editEstate: (estate: IEstate) => void;
    selectEstate: (id: string) => void;
}