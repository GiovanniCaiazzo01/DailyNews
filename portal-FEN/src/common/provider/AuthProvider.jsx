import React, { createContext, useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { HTTPClient } from "../../api/HTTPClients";
const AuthContext = createContext();

const verify_auth = async () => {
  return await HTTPClient.checkToken();
};

const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const memoizedVerifyAuth = useCallback(async () => verify_auth(), [pathname]);

  const logout = async () => {
    await HTTPClient.logout();
    setIsLogged(() => false);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token && isLogged === true) {
      return navigate("/");
    }

    memoizedVerifyAuth().then((response) => {
      if (response !== isLogged) {
        setIsLogged(() => response);
      }
    });
  }, [memoizedVerifyAuth]);

  return (
    <AuthContext.Provider value={{ isLogged, verify_auth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
