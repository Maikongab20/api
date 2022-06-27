import { v4 as uuid } from "uuid";
import { prisma } from "../prisma";

interface RequestType {
  name: string;
}

class ServiceType {

  async CreateType({ name }: RequestType) {

    const nameAlreadyExists = await prisma.type.findFirst({
      where: {
        name
      }
    });

    if (nameAlreadyExists) {
      throw new Error("name type already exists");
    }

    const type = await prisma.type.create({
      data: {
        id: uuid(),
        name
      }
    });

    return type;
  }
}

export { ServiceType }