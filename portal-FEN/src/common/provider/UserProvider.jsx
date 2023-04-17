import React, { createContext, useCallback, useEffect, useState } from "react";
import { HTTPClient } from "../../api/HTTPClients";
import jwtDecode from "jwt-decode";
import { useLocation } from "react-router-dom";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { pathname } = useLocation();

  const fetchUser = async (email) => {
    const response = await HTTPClient.get(`/users`, email);
    const user = response.data;
    return user;
  };
  const memoizedFetchUser = useCallback(async () => {
    const token = localStorage.getItem("token");
    const { email } = jwtDecode(token);
    const user = await fetchUser(email);
    setUser(user);
  }, []);

  useEffect(() => {
    memoizedFetchUser();
  }, [memoizedFetchUser, pathname]);

  return (
    <UserContext.Provider value={{ user, fetchUser: memoizedFetchUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
