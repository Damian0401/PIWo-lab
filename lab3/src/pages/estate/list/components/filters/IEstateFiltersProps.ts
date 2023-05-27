import { IEstate } from "../../../../../common/interfaces";

export interface IEstateFiltersProps {
    estates: IEstate[];
    setEstates: (estates: IEstate[]) => void;
}