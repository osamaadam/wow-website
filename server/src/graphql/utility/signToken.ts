import jwt from "jsonwebtoken";

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
