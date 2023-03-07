import React, { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [validToken, setValidToken] = useState();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const checkUserToken = async () => {
    const token = localStorage.getItem("token");
    if (!token || token === "undefined") return navigate("/login");

    const userInfo = {
      name: localStorage.getItem("name"),
      email: localStorage.getItem("email"),
      age: localStorage.getItem("age"),
    };

    const base_url = "http://localhost:3000";
    const isVerifiedToken = await fetch(`${base_url}/auth/verify-token`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userInfo }),
    })
      .then((response) => response.json())
      .then((isValid) => setValidToken(isValid));

    if (!validToken) {
      localStorage.clear();
    }
  };

  useEffect(() => {
    checkUserToken();
  }, [pathname]);

  console.log("reset", pathname);
  return <AuthContext.Provider value={""}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
