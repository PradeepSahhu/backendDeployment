import jwt from "jsonwebtoken";

const verifyJWT = (token) => {
  const data = jwt.verify(token, "Pradeep");

  console.table([data]);
};

export { verifyJWT };
