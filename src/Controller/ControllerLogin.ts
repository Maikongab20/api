import { Request, Response } from "express";
import { Servicelogin } from "../Service/ServiceLogin";



class ControllerLogin {
  async CreateLogin(request: Request, response: Response) {

    const { email, password } = request.body;

    const service = new Servicelogin();

    const token = await service.login({
      email,
      password
    });

    return response.json(token);
  }
}

export { ControllerLogin }