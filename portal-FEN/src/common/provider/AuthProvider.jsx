import React, { createContext, useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { HTTPClient } from "../../api/HTTPClients";
const AuthContext = createContext();

const verify_auth = async () => {
  return await HTTPClient.checkToken();
};

const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);

  const { pathname } = useLocation();

  const memoizedVerifyAuth = useCallback(async () => verify_auth(), [pathname]);

  useEffect(() => {
    memoizedVerifyAuth().then((response) => {
      if (response !== isLogged) {
        setIsLogged(() => response);
      }
    });
  }, [memoizedVerifyAuth]);

  return (
    <AuthContext.Provider value={{ isLogged, verify_auth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
