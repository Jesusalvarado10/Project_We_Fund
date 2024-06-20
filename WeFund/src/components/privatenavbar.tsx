import React from "react";
import { useAuth } from "../context/contex";




interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { user } = useAuth(); // Supongamos que useAuth devuelve información sobre el usuario y si se está cargando
  
 
  return <>{user ? children : null}</>;
};

export default PrivateRoute;