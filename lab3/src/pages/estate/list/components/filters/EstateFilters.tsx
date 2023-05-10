import * as React from "react";
import { IEstateFiltersProps } from "./IEstateFiltersProps";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import styles from "./EstateFilters.module.scss";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";

const EstateFilters = ({ estates, setEstates }: IEstateFiltersProps) => {
  const [selectedCity, setSelectedCity] = useState("All");
  const [selectedBedrooms, setSelectedBedrooms] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isDescending, setIsDescending] = useState(true);

  const cities = estates.map((estate) => estate.city);
  const uniqueCities = ["All", ...new Set(cities)];

  const numberOfBedrooms = estates.map((estate) => estate.bedrooms);
  const maxNumberOfBedrooms = Math.max(...numberOfBedrooms);
  const allNumberOfBedrooms =
    maxNumberOfBedrooms > 0
      ? Array.from(Array(maxNumberOfBedrooms).keys()).map((x) => x + 1)
      : [];
  const uniqueNumberOfBedrooms = ["All", ...allNumberOfBedrooms];

  const handleCitySelect = (event: ChangeEvent<HTMLSelectElement>): void => {
    const selectedCity = event.target.value;
    setSelectedCity(selectedCity);
  };

  const handleBedroomsSelect = (
    event: ChangeEvent<HTMLSelectElement>
  ): void => {
    const selectedBedrooms = event.target.value;
    setSelectedBedrooms(selectedBedrooms);
  };

  const handleToggleSort = (): void => {
    setIsDescending(!isDescending);
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchQuery = event.target.value.toLowerCase();
    setSearchQuery(searchQuery);
  };

  const filterEstates = (): void => {
    let filteredEstates = estates;

    if (selectedCity !== "All") {
      filteredEstates = filteredEstates.filter(
        (estate) => estate.city === selectedCity
      );
    }

    if (selectedBedrooms !== "All") {
      filteredEstates = filteredEstates.filter(
        (estate) => estate.bedrooms === Number(selectedBedrooms)
      );
    }

    if (searchQuery !== "") {
      filteredEstates = filteredEstates.filter((estate) =>
        estate.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (isDescending) {
      filteredEstates = filteredEstates.sort((a, b) => a.price - b.price);
    } else {
      filteredEstates = filteredEstates.sort((a, b) => b.price - a.price);
    }

    setEstates([...filteredEstates]);
  };
  const cachedFilterEstates = useCallback(filterEstates, [
    estates,
    selectedCity,
    selectedBedrooms,
    searchQuery,
    isDescending,
    setEstates,
  ]);

  useEffect(() => {
    cachedFilterEstates();
  }, [cachedFilterEstates]);

  return (
    <div className={styles.container}>
      <select onChange={handleCitySelect}>
        {uniqueCities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      <select onChange={handleBedroomsSelect}>
        {uniqueNumberOfBedrooms.map((bedrooms) => (
          <option key={bedrooms} value={bedrooms}>
            {bedrooms}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Search..." onChange={handleSearch} />
      <span>
        {isDescending ? (
          <GoTriangleDown onClick={handleToggleSort} />
        ) : (
          <GoTriangleUp onClick={handleToggleSort} />
        )}
      </span>
    </div>
  );
};

export default EstateFilters;
