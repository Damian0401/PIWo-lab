import * as React from 'react';
import { IEstateListProps } from './IEstateListProps';
import EstateListItem from './components/estate-list-item/EstateListItem';
import { useState } from 'react';
import EstateFilters from './components/estate-filters/EstateFilters';
import styles from './EstateList.module.scss';


const EstateList = ({ estates }: IEstateListProps) => {

    const [filteredEstates, setFilteredEstates] = useState(estates);
    const estateList = filteredEstates.map((estate) =>
        <EstateListItem
            key={estate.id}
            estate={estate}
        />
    );


    return (
        <div className={styles.container}>
            <EstateFilters estates={estates} setEstates={setFilteredEstates} />
            <div className={styles.listContainer}>
                {estateList}
            </div>
        </div>
    );
}

export default EstateList;