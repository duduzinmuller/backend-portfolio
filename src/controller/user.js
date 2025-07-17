import { CreateUserSchema } from "../schema/user.js";
import { CreateUserUseCase } from "../use-case/user.js";
import { created, serverError, badRequest } from "./helpers/http.js";
import { ZodError } from "zod";

export class CreateUserController {
  async execute(httpRequest) {
    try {
      const params = httpRequest.body;

      await CreateUserSchema.parseAsync(params);

      const createUserUseCase = new CreateUserUseCase();

      const result = await createUserUseCase.execute(params);

      return created(result);
    } catch (error) {
      console.error(error);
      if (error instanceof ZodError) {
        return badRequest(error.errors);
      }
      return serverError();
    }
  }
}
