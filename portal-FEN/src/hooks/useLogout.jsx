import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const useLogout = () => {
  const { verify_auth } = useAuth();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    return verify_auth();
  };
  useEffect(() => {
    logout();
    if (pathname === "/logout") navigate("/");
  }, []);
  return;
};

export default useLogout;
