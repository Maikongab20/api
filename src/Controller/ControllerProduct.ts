import { Request, Response } from "express";
import { ServiceProduct } from "../Service/ServiceProduct";



class ControllerProduct {
  async CreateProductController(request: Request, response: Response) {

    const { name, barcode, price, desciption, typeID, employeerId } = request.body;

    const service = new ServiceProduct();

    const product = await service.CreateProduct({
      name,
      barcode,
      price,
      desciption,
      typeID,
      employeerId
    });
    return response.json(product);
  }
}

export { ControllerProduct }