import "./load-env-vars";

import express from "express";

import { config } from "./config";
import { healthRouter } from "./health/health-router";
import { userRouter } from "./infrastructure/user-router";

function boostrap() {
  const app = express();

  app.use(express.json());
  app.use("/health", healthRouter);
  app.use("/users", userRouter);

  const { port } = config.server;

  app.listen(port, () => {
    console.log(`[APP] - Started application on port ${port}`);
  });
}

boostrap();
