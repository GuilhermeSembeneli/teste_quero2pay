import axios from "axios";
import { getCookieData } from "./cookies";

const headers = {
  "Content-Type": "application/json",
};

export const APINext = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  headers,
});

APINext.interceptors.request.use((config: any) => {
  const token = getCookieData(process.env.NEXT_PUBLIC_TOKEN_KEY);
  if (token) config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export default APINext;
