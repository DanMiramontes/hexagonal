import express from "express";

import { userController } from "./dependencies";

const userRouter = express.Router();

userRouter.get("/:id/welcome", userController.run.bind(userController));

export { userRouter };
