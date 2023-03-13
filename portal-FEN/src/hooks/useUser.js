import { useContext } from "react";
import { UserContext } from "../common/provider/UserProvider";
const useUser = () => {
  return useContext(UserContext);
};

export default useUser;
