import React, { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import PageWrapper from "../components/page-wrapper/PageWrapper";
import EstateList from "./estate/list/EstateList";
import EstateDetails from "./estate/details/EstateDetails";
import EstateAdd from "./estate/add/EstateAdd";
import axios from "axios";
import Login from "./login/Login";
import EstateFavoritesList from "./estate/favoritesList/EstateFavoritesList";
import { IEstate } from "../common/interfaces";

const App = () => {
  const [selectedEstate, setSelectedEstate] = useState<IEstate>();
  const [estates, setEstates] = useState<IEstate[]>([]);

  useEffect(() => {
    axios
      .get<IEstate[]>("/data/estates.json")
      .then((response) => setEstates(response.data));
  }, []);

  const handleSelectEstate = (id: number): void => {
    const estate = estates.find((estate) => estate.id === id);
    setSelectedEstate(estate);
  };

  const handleAddEstate = (estate: IEstate): void => {
    const ids = estates.map((estate) => estate.id);
    const maxId = Math.max(...ids);
    estate.id = maxId + 1;
    setEstates([...estates, estate]);
  };

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
              element: (
                <EstateDetails
                  estate={selectedEstate}
                  selectEstate={handleSelectEstate}
                />
              ),
            },
            {
              path: "add",
              element: <EstateAdd addEstate={handleAddEstate} />,
            },
            {
              path: "favorites",
              element: <EstateFavoritesList estates={estates} />,
            },
          ],
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
