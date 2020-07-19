import nodemailer from "nodemailer";
require("dotenv").config();

export const transporter = nodemailer.createTransport({
  sendmail: true,
  newline: "unix",
  path: "/usr/sbin/sendmail",
});
