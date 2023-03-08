import React, { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const token = localStorage.getItem("token");
  const checkUserToken = async () => {
    if (token && token !== "undefined") return navigate("/");
    else if (!token) return setIsLogged(() => false);

    const userInfo = {
      name: localStorage.getItem("name"),
      email: localStorage.getItem("email"),
      age: localStorage.getItem("age"),
    };

    const base_url = "http://localhost:3000";
    await fetch(`${base_url}/auth/verify-token`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userInfo }),
    })
      .then((response) => response.json())
      .then((response) => setIsLogged(() => response));

    if (!isLogged) {
      return localStorage.clear();
    }
  };

  useEffect(() => {
    checkUserToken();
  }, [pathname, token]);

  console.log("reset", pathname, isLogged);
  return (
    <AuthContext.Provider value={{ isLogged }}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
