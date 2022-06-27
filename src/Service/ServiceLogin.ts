import { prisma } from "../prisma";
import { sign } from "jsonwebtoken"
import { compare } from "bcrypt";

interface RequestUser {
  email: string;
  password: string;
}

class Servicelogin {

  async login({ email, password }: RequestUser) {

    const EmailAlreadyExists = await prisma.employeer.findFirst({
      where: {
        email
      }
    });

    if (!EmailAlreadyExists) {
      throw new Error("email or password incorrect");
    }

    const passwordMatch = compare(password, EmailAlreadyExists.password);

    if (!passwordMatch) {
      throw new Error("email or password incorrect");
    }

    const token = sign({}, process.env.KEY_TOKEN, {
      subject: EmailAlreadyExists.id,
      expiresIn: "20s"
    });

    return token;

  }
}
export { Servicelogin }