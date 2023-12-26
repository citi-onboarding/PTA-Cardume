import express from "express";
import userController from "./controllers/UserController";
import { SendMail } from "./controllers/MailController";
const routes = express.Router();

routes.post("/user", userController.create);
routes.get("/user", userController.get);
routes.delete("/user/:id", userController.delete);
routes.patch("/user/:id", userController.update);

routes.post("/email", SendMail);

export default routes;
