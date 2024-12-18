import jwt from "jsonwebtoken";

const createTokens = () => {
  return jwt.sign({ name: "PradeepSahu" }, "Pradeep", {
    expiresIn: 60 * 60 * 24,
  });
};

export { createTokens };
