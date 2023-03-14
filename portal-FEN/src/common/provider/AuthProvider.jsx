import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { HTTPClient } from "../../api/HTTPClients";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    HTTPClient.checkToken().then((result) => setIsLogged(() => result));
  }, [pathname]);

  return (
    <AuthContext.Provider value={{ isLogged }}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
