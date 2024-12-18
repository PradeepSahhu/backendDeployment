import { Router } from "express";

import SystemOfJWT from "./controllers.js";

const router = Router();

router.route("/").get((req, res) => {
  const { name } = req.body;

  console.log(name);

  console.log("-----------------------------------");
  const data = SystemOfJWT();
  console.table(data);
  return res.status(200).json({
    message: "everything working fine",
  });
});

export default router;
