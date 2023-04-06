import React, { createContext, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { HTTPClient } from "../../api/HTTPClients";
const AuthContext = createContext();

const verify_auth = async () => {
  return await HTTPClient.checkToken();
};

const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);

  const { pathname } = useLocation();

  const memoizedVerifyAuth = useMemo(() => verify_auth, []);

  useEffect(() => {
    memoizedVerifyAuth().then((isLogged) => setIsLogged(() => isLogged));
  }, [pathname, memoizedVerifyAuth]);

  return (
    <AuthContext.Provider value={{ isLogged, verify_auth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
