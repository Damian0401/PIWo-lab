import React, { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import PageWrapper from "../components/page-wrapper/PageWrapper";
import EstateList from "./estate/list/EstateList";
import EstateDetails from "./estate/details/EstateDetails";
import EstateAdd from "./estate/add/EstateAdd";
import Login from "./login/Login";
import EstateFavorites from "./estate/favorites/EstateFavorites";
import { IEstate } from "../common/interfaces";
import PrivateRoute from "../components/private-route/PrivateRoute";
import AnonymousRoute from "../components/anonymous-route/AnonymousRoute";
import { addEstate, getAllEstates } from "../common/api/services/EstateService";

const App = () => {
  const [selectedEstate, setSelectedEstate] = useState<IEstate>();
  const [estates, setEstates] = useState<IEstate[]>([]);
  const [refresh, setRefresh] = useState<boolean>(false);

  useEffect(() => {
    getAllEstates().then((estates) => setEstates(estates));
  }, [refresh]);

  const handleSelectEstate = (id: string): void => {
    const estate = estates.find((estate) => estate.id === id);
    setSelectedEstate(estate);
  };

  const handleAddEstate = (estate: IEstate): void => {
    addEstate(estate).then(() => setRefresh(!refresh));
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
              element: (
                <PrivateRoute>
                  <EstateAdd addEstate={handleAddEstate} />
                </PrivateRoute>
              ),
            },
            {
              path: "favorites",
              element: (
                <PrivateRoute>
                  <EstateFavorites estates={estates} />
                </PrivateRoute>
              ),
            },
          ],
        },
        {
          path: "login",
          element: (
            <AnonymousRoute>
              <Login />
            </AnonymousRoute>
          ),
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
