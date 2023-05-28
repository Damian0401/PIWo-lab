import * as React from "react";
import { IPrivateRouteProps } from "./IPrivateRouteProps";
import { useAuth } from "../../common/api/services/UserService";
import { Navigate } from "react-router-dom";

const PrivateRoute: React.FC<IPrivateRouteProps> = ({ children }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;

  return <>{children}</>;
};

export default PrivateRoute;
