import { hash } from "bcrypt";
import { v4 as uuid } from "uuid";
import { prisma } from "../prisma";


interface RequestEmployeer {
  name: string;
  email: string;
  password: string;
}

class ServiceEmployeer {
  async CreateEmployeer({ name, email, password }: RequestEmployeer) {

    const nameAlreadyExists = await prisma.employeer.findFirst({
      where: {
        name
      }
    });

    if (nameAlreadyExists) {
      throw new Error("name already exists");
    }

    const passwordHash = await hash(password, 8);

    const employeer = await prisma.employeer.create({
      data: {
        id: uuid(),
        name,
        email,
        password: passwordHash
      }
    });

    return employeer;
  }
}

export { ServiceEmployeer } 