import jwt from "jsonwebtoken";
import { User } from "src/types";

export const signToken = (user: User) => {
  const token = jwt.sign(
    {
      id: user.id,
      last_ip: user.last_ip,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
  return token;
};
