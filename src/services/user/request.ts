import APINext from "services/apiNext";
import { LoginRequest } from "./interface";

export const postLogin = async ({ email, password }: LoginRequest) => {
  try {
    const response = await APINext.post("/login", { email, password });
    return response.data;
  } catch (error: any) {
    const { response } = error;
    throw response;
  }
};

export const getUserInfo = async () => {
  try {
    const response = await APINext.get("/login");
    return response.data;
  } catch (error: any) {
    const { response } = error;
    throw response;
  }
};
