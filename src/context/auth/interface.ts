import { LoginRequest, UserLogged } from "services/user/interface";

export interface ContextData {
  user?: UserLogged;
  loginUser: (userData: LoginRequest) => void;
}

export interface IUserData {
  user: UserLogged;
}
