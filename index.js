import "dotenv/config";
import express from "express";
import cors from "cors";
import { CreateUserController } from "./src/controller/user.js";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.post("/api/users", async (request, response) => {
  const controller = new CreateUserController();

  const { statusCode, body } = await controller.execute(request);

  response.status(statusCode).send(body);
});

app.listen(8080, () => console.log("Rodando"));
