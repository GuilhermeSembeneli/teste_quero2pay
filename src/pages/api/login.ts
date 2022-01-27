// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidV4 } from "uuid";

const user = new Map<string, string>();

user.set("email", "guilherme@naQuero2pay.com");
user.set("password", "quero2pay");
user.set("username", "Gui");
user.set("token", uuidV4());

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const userEmail = user.get("email");
  const username = user.get("username");
  const userPassword = user.get("password");
  if (req.method === "POST") {
    const { email, password } = req.body;

    if (email === userEmail && password === userPassword) {
      user.set("token", uuidV4());
      const token = user.get("token");

      return res.status(200).json({ token, username });
    }

    return res.status(400).json({ message: "Usuario não encontrado." });
  }

  if (req.method === "GET") {
    const auth = req.headers?.authorization;
    if (!auth) return res.status(401).json({ message: "Não autorizado." });

    const [, tokenKey] = auth?.split(" ");
    const token = user.get("token");

    if (tokenKey === token) {
      return res.status(200).json({ username, email: userEmail, token });
    }

    return res.status(400).json({ message: "Usuario não encontrado." });
  }
}
