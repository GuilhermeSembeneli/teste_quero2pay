import { AuthProvider } from "context/auth";

export const UserWrapper: React.FC = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
