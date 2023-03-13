import React, { createContext, useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const { userEmail } = useAuth();

  const fetch_user = async () => {
    const BASE_URL = "http://localhost:3000";
    if (userEmail) {
      console.log("sono entrato", userEmail);
      const user = await fetch(`${BASE_URL}/users/${userEmail}`).then(
        (response) => response.json()
      );
      setUser(() => user.data);
    }
  };
  useEffect(() => {
    if (userEmail) {
      fetch_user();
    }
  }, [userEmail]);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export { UserProvider, UserContext };
