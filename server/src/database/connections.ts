import mysql from "mysql2";

require("dotenv").config();

const HOST = process.env.HOST || "0.0.0.0";

export const authDB = mysql
  .createPool({
    host: HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: "acore_auth",
  })
  .promise();
