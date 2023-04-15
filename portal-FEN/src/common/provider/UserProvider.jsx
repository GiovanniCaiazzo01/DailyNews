import React, { createContext, useCallback, useEffect, useState } from "react";
import { HTTPClient } from "../../api/HTTPClients";
import useAuth from "../../hooks/useAuth";
import jwtDecode from "jwt-decode";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const { isLogged } = useAuth();
  const [user, setUser] = useState(null);

  const fetchUser = async (email) => {
    const response = await HTTPClient.get(`/users`, email);
    const user = response.data;
    return user;
  };
  const memoizedFetchUser = useCallback(async () => {
    if (isLogged) {
      const token = localStorage.getItem("token");
      const { email } = jwtDecode(token);
      const user = await fetchUser(email);
      setUser(user);
    }
  }, [isLogged]);

  useEffect(() => {
    if (isLogged) {
      memoizedFetchUser();
    } else {
      setUser(null);
    }
  }, [memoizedFetchUser]);

  return (
    <UserContext.Provider value={{ user, fetchUser: memoizedFetchUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
