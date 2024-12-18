import { createTokens } from "./jsonwebTokens.js";

import { verifyJWT } from "./auth.middleware.js";

const checkIfWorking = () => {
  const token = createTokens();
  const res = verifyJWT(token);
  console.log(res);
};

export default checkIfWorking;
