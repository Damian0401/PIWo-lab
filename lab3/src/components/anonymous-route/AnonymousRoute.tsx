import * as React from "react";
import { IAnonymousRouteProps } from "./IAnonymousRouteProps";
import { useAuth } from "../../common/api/services/userService";
import { Navigate } from "react-router-dom";

const AnonymousRoute: React.FC<IAnonymousRouteProps> = ({ children }) => {
  const { user } = useAuth();

  if (user) return <Navigate to="/" />;

  return <>{children}</>;
};

export default AnonymousRoute;
