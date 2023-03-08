import { useContext } from "react";
import { AuthContext } from "../common/provider/AuthProvider";
const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
