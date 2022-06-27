import { Request, Response } from "express";
import { ServiceType } from "../Service/serviceType";


class ControllerType {

  async CreateTypeController(request: Request, response: Response) {

    const { name } = request.body;

    const service = new ServiceType();

    const type = await service.CreateType({
      name
    });

    return response.json(type);
  }
}

export { ControllerType }