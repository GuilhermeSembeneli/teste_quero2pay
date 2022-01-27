import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { setCookieData } from "services/cookies";
import { validateNeedGetUserInfo } from "./helper";

import { ContextData } from "./interface";
import Header from "components/Header/";
import { postLogin, getUserInfo } from "services/user/request";
import { LoginRequest, UserLogged } from "services/user/interface";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<ContextData>({} as ContextData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserLogged>();
  const router = useRouter();
  console.log(user);
  const loginUser = async ({ email, password }: LoginRequest) => {
    try {
      const response = await postLogin({ email, password });
      console.log(response);
      setUser(response);

      setCookieData(process.env.NEXT_PUBLIC_TOKEN_KEY, response?.token);
      toast.success("Tudo certo! Aguarde enquanto te redirecionamos...");

      router.push("/");
    } catch (error: any) {
      console.log(error);
      toast.error(error?.message || "Usuário ou senha inválidos");
    }
  };

  const getUser = async () => {
    if (validateNeedGetUserInfo(router.pathname, user)) return;

    try {
      const user = await getUserInfo();
      setUser(user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loginUser }}>
      <Header />
      {children}
    </AuthContext.Provider>
  );
};
