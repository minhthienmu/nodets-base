import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const access_token_secret =
  "c7ee923a448307b4d03f86721244f7f7439de25b68f47d59121a05d004495eb48ee5bacf89fd881157bbdc06d7db57dbb2066b0ab059c679969bc843205fb6df";

const login = (req: Request, res: Response) => {
  const username = req.body.username;
  const user = { name: username };

  const accessToken = jwt.sign(
    user,
    process.env.ACCESS_TOKEN_SECRET || access_token_secret
  );
  res.json({ accessToken: accessToken });
};

const checkAuth = (req: any, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader;

  if (token == null) return res.sendStatus(401);

  jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET || access_token_secret,
    (err: any, user: any) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    }
  );
};

export default { login, checkAuth };
