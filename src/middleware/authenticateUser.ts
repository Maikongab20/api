import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

export function authenticateUser(request: Request, response: Response, next: NextFunction) {

  const Authenticate = request.headers.authorization;

  if (!Authenticate) {

    return response.status(401).json({
      message: "unauthorized"
    });

  }

  const [, token] = Authenticate.split(" ");

  try {

    verify(token, process.env.KEY_TOKEN);
    return next();

  } catch (error) {

    return response.status(401).json({
      message: "token invalid"
    });

  }

}

