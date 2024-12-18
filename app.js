import express from "express";

import userRoute from "./src/routers.js";

const app = express();

app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use("/api/v1", userRoute);

export { app };
