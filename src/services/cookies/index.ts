import { NextPageContext } from "next";
import { parseCookies, setCookie } from "nookies";

export const setCookieData = (
  name: string,
  data: any,
  age?: number,
  path?: string
) => {
  return setCookie(null, name, data, {
    maxAge: age ? 60 * 60 * age : 60 * 60 * 48, //48h
    path: path || "/",
  });
};

export const getCookieData = (
  name: string,
  ctx?: Pick<NextPageContext, "req">
) => {
  const cookies = parseCookies(ctx);
  return cookies[name] || null;
};

export const getLocalStorage = (name: string) => {
  if (typeof window === "undefined") return {};

  const getItem = localStorage.getItem(name);
  //@ts-ignore
  return JSON.parse(getItem);
};

export const setLocalStorage = (name: string, data: object) => {
  if (typeof window === "undefined") return {};

  const setItem = localStorage.setItem(name, JSON.stringify(data));
  return setItem;
};
