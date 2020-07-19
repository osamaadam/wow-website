import express from "express";
import { Sequelize } from "sequelize";

require("dotenv").config();

const PORT = process.env.PORT || 5000;
const app = express();

const authDB = new Sequelize(
  "acore_auth",
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    dialect: "mysql",
  }
);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}..`);
});
