import mysql from "mysql2";

require("dotenv").config();

export const authDB = mysql
  .createPool({
    host: "127.0.0.1",
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: "acore_auth",
  })
  .promise();
