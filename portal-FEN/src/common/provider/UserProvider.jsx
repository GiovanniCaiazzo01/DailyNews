import React, { createContext, useCallback, useEffect, useState } from "react";
import { HTTPClient } from "../../api/HTTPClients";
import useAuth from "../../hooks/useAuth";
import jwtDecode from "jwt-decode";
const UserContext = createContext();

const fetch_user = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    const { email } = await jwtDecode(token);
    const response = await HTTPClient.get(`/users`, email);
    const user = response.data;
    return user;
  }
};
const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const { isLogged } = useAuth();

  const memorizedFetchUser = useCallback(
    async () => await fetch_user(),
    [isLogged]
  );

  useEffect(() => {
    if (isLogged) {
      memorizedFetchUser().then((user) => setUser(() => user));
    }
  }, [memorizedFetchUser]);

  return (
    <UserContext.Provider value={{ user, fetch_user }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
