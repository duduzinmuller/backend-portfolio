import { z } from "zod";

export const CreateUserSchema = z.object({
  name: z.string().trim().min(1, {
    message: "O primeiro nome e obrigatorio",
  }),
  email: z.string().trim().email({
    message: "O e-mail e invalido",
  }),
  subject: z.string().trim().min(1, {
    message: "O assunto e obrigatorio",
  }),
  message: z.string().trim().optional(),
});
