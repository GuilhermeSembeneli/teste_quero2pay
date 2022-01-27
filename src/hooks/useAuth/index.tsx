import { AuthContext } from "context/auth";
import { useContext } from "react";

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
