import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { HTTPClient } from "../../api/HTTPClients";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const { pathname } = useLocation();

  const verify_auth = async () => {
    await HTTPClient.checkToken().then((result) => setIsLogged(() => result));
  };

  useEffect(() => {
    verify_auth();
  }, [pathname]);

  return (
    <AuthContext.Provider value={{ isLogged, verify_auth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
