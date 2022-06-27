import { v4 as uuid } from "uuid";
import { prisma } from "../prisma";

interface RequestProduct {
  name: string;
  barcode: string;
  price: number;
  description: string;
  typeID: string;
  employeerId: string;
}

class ServiceProduct {
  async CreateProduct({ name, barcode, price, description, typeID, employeerId }: RequestProduct) {

    const nameAlreadyExists = await prisma.product.findFirst({
      where: {
        name
      }
    });

    if (nameAlreadyExists) {
      throw new Error("name already exists");
    }

    const product = await prisma.typeProduct.create({
      data: {
        id: uuid(),
        product: {
          create: {
            id: uuid(),
            name,
            barcode,
            price,
            description,
            employeer: {
              connect: {
                id: employeerId
              }
            }
          }
        }
      }
    })

    return { product }
  }
}

export { ServiceProduct }