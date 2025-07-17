import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class CreateUserRepository {
  async execute(createUserParams) {
    const user = await prisma.user.create({
      data: {
        id: createUserParams.id,
        name: createUserParams.name,
        email: createUserParams.email,
        subject: createUserParams.subject,
        message: createUserParams.message,
      },
    });

    return user;
  }
}
