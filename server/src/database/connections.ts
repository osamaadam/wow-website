import mysql from "mysql2";

require("dotenv").config();

const HOST = process.env.HOST || "0.0.0.0";
const MYSQL_PORT = Number(process.env.MYSQL_HOST) || 3306;
const AUTH_DATABASE = process.env.AUTH_DATABASE || "auth";

export const authDB = mysql
  .createPool({
    host: HOST,
    port: MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: AUTH_DATABASE,
  })
  .promise();
