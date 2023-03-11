import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import jwt_decode from "jwt-decode";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const { pathname } = useLocation();

  const checkUserToken = async () => {
    const token = localStorage.getItem("token");

    const dToken = jwt_decode(token);

    const { name, age, email } = dToken;
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("email", email);

    const userInfo = {
      name,
      age,
      email,
    };

    if (!token) {
      localStorage.clear();
      return setIsLogged(() => false);
    }

    console.log(token);
    const base_url = "http://localhost:3000";
    const result = await fetch(`${base_url}/auth/verify-token`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userInfo }),
    }).then((response) => response.json());

    if (!result) {
      localStorage.clear();
      return setIsLogged(() => false);
    }
    setIsLogged(() => result);
  };

  useEffect(() => {
    checkUserToken();
  }, [pathname, isLogged]);

  return (
    <AuthContext.Provider value={{ isLogged }}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
