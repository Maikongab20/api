import { Request, Response } from "express";
import { ServiceEmployeer } from "../Service/ServiceEmployeer";





class ControllerEmployeer {
  async ControllerCreateEmployeer(request: Request, response: Response) {

    const { name, email, password } = request.body;
    const service = new ServiceEmployeer();

    const employeer = await service.CreateEmployeer({
      name,
      email,
      password
    });

    return response.json(employeer);
  }
}

export { ControllerEmployeer }