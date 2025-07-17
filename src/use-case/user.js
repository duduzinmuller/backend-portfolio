import { v4 as uuidV4 } from "uuid";
import { CreateUserRepository } from "../repositorio/user.js";

export class CreateUserUseCase {
  async execute(createUserParams) {
    const userId = uuidV4();

    const user = {
      id: userId,
      ...createUserParams,
    };

    const createUserRepository = new CreateUserRepository();

    const result = await createUserRepository.execute(user);

    return result;
  }
}
