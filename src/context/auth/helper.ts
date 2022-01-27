import { getCookieData } from "services/cookies";
import { UserLogged } from "services/user/interface";

export const validateNeedGetUserInfo = (
  pathname: string,
  user?: UserLogged
) => {
  const token = getCookieData(process.env.NEXT_PUBLIC_TOKEN_KEY);
  const isLogin = pathname === "/login";

  const validateNotNeed = (!isLogin && !token) || user?.username;
  return !!validateNotNeed;
};
