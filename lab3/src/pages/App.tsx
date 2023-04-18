import React, { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import PageWrapper from '../components/page-wrapper/PageWrapper';
import EstateList from './estate-list/EstateList';
import EstateDetails from './estate-details/EstateDetails';
import { IEstate } from '../interfaces/IEstate';
import EstateAdd from './estate-add/EstateAdd';

const App = () => {

  const [selectedEstate, setSelectedEstate] = useState<IEstate>();
  const [estates, setEstates] = useState<IEstate[]>([
    {
      id: 1,
      title: "Estate 1",
      description: "Estate 1 description ",
      price: 1000,
      address: "Estate 1 address",
      image: "https://picsum.photos/200/300",
      city: "Real city 1",
      bedrooms: 1,
    },
    {
      id: 2,
      title: "Estate 2",
      description: "Estate 2 description",
      price: 2000,
      address: "Estate 2 address",
      image: "https://picsum.photos/200/300",
      city: "Real city 2",
      bedrooms: 2,
    },
    {
      id: 3,
      title: "Estate 3",
      description: "Estate 3 description",
      price: 3000,
      address: "Estate 3 address",
      image: "https://picsum.photos/200/300",
      city: "Real city 3",
      bedrooms: 3,
    },
  ]);

  const handleSelectEstate = (id: number): void => {
    const estate = estates.find((estate) => estate.id === id);
    setSelectedEstate(estate);
  }

  const handleAddEstate = (estate: IEstate): void => {
    const ids = estates.map((estate) => estate.id);
    const maxId = Math.max(...ids);
    estate.id = maxId + 1;
    setEstates([...estates, estate]);
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PageWrapper Element={Navbar} />,
      children: [
        {
          index: true,
          element: <EstateList estates={estates} />,
        },
        {
          path: "estate",
          children: [
            {
              path: ":id",
              element: <EstateDetails
                estate={selectedEstate}
                selectEstate={handleSelectEstate}
              />,
            },
            {
              path: "add",
              element: <EstateAdd addEstate={handleAddEstate} />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

