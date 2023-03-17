import React, { createContext, useEffect, useState } from "react";
import { HTTPClient } from "../../api/HTTPClients";
import useAuth from "../../hooks/useAuth";
import jwtDecode from "jwt-decode";
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const { isLogged } = useAuth();

  const fetch_user = async () => {
    const token = localStorage.getItem("token");
    const { email } = await jwtDecode(token);
    const response = await HTTPClient.get(`/users`, email);
    const user = response.data;
    setUser(() => user);
  };

  useEffect(() => {
    fetch_user();
  }, [isLogged, user]);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export { UserProvider, UserContext };
