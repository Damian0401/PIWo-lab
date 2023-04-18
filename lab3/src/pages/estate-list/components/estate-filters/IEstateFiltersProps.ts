import { IEstate } from "../../../../interfaces/IEstate";

export interface IEstateFiltersProps {
    estates: IEstate[];
    setEstates: (estates: IEstate[]) => void;
}