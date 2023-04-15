import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
const Logout = () => {
  const { logout } = useAuth();
  useEffect(() => {
    logout();
  }, []);
  return null;
};

export { Logout };
