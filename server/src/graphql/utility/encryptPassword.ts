import crypto from "crypto";

export const encryptPassword = (username: string, password: string) => {
  const encryptedpassword = crypto.createHash("sha1");
  encryptedpassword.update(`${username}:${password}`.toUpperCase());
  return encryptedpassword.digest("hex").toUpperCase();
};
