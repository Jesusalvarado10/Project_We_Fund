import React, { createContext, useContext, useState } from 'react';
import  {User}  from '../Class/user';


interface AuthContextType {
  isAuthenticated: boolean;
  color: string;

  user: User | null; // Añadimos la información del usuario
  login: (user: User ) => void; // Pasamos la información del usuario al iniciar sesión
  logout: () => void;
  changeColor: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [color, setColor] = useState('green-500'); // Añadimos el color
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null); // Inicialmente no hay usuario
  const changeColor = () => {
    setColor("customPurple");
  }
  const login = (loggedInUser: User ) => {
    // Aquí realizarías la lógica de autenticación, como enviar credenciales al servidor
    // y actualizar isAuthenticated basado en la respuesta
    console.log("Usuario logeado")
    setIsAuthenticated(true);
    setUser(loggedInUser as User); // Actualizamos la información del usuario al iniciar sesión
    
  };

  const logout = () => {
    // Lógica para cerrar sesión, como eliminar tokens de sesión
    setIsAuthenticated(false);
    setUser(null); // Eliminamos la información del usuario al cerrar sesión
  
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user  , login, logout ,color,changeColor }}>
      {children}
    </AuthContext.Provider>
  );
};
