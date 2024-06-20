import React from "react";
import { useAuth } from "../context/contex";




interface PrivateRoute2Props {
  children: React.ReactNode;
}

const PrivateRouteUser: React.FC<PrivateRoute2Props> = ({ children }) => {
  const { user} = useAuth(); // Supongamos que useAuth devuelve información sobre el usuario y si se está cargando
 
  return <>{user ? null : children}</>;
};

export default PrivateRouteUser;