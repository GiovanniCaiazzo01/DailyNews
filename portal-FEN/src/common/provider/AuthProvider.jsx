import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);

  const { pathname } = useLocation();

  const token = localStorage.getItem("token" || "");
  console.log("Fuori checkUSerToken", { token });
  const checkUserToken = async () => {
    const userInfo = {
      name: localStorage.getItem("name") || "",
      email: localStorage.getItem("email") || "",
      age: localStorage.getItem("age") || "",
    };

    if (!(token && userInfo.name && userInfo.email && userInfo.age)) {
      localStorage.clear();
      return setIsLogged(() => false);
    }

    console.log("Dentro checkUSerToken", { token });

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
  }, [pathname]);

  return (
    <AuthContext.Provider value={{ isLogged }}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
