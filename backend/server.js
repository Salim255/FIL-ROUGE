const express = require("express");
//pg is a nodejs modlues that allows us to connect and work with postgres
const app = express();
//We use pg to creat a connection over pool tool sever
const pg = require("pg");
console.log("====================================");
console.log("Server 🍎🩸🩸🩸");
console.log("====================================");
/* const pool = new pg.Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USERNAME, //The same username in docker compose postgres_user
  password: process.env.DB_PASSWORD, //
}); */

//To test if the connection is stablished
pool.query("SELECT 1 +1 ;").then((res) => console.log(res));
//To check the connection is established
/* pool.query("SELECT   1 + 1;").then((res) => {
  console.log("Connected avec success");
  console.log("====================================");
  console.log(res);
  console.log("====================================");
}); */
//

/* app.get("/comment", async (req, res) => {
  console.log("from comment 🍎🍎🍎");
  const { rows } = await pool.query(`SELECT * FROM comment`);

  res.send(rows);
  res.status(200).json({
    status: "success",
    message: `${process.env.DB_USERNAME} -> Hello world, from Salim Fil Rouge`,
    data: rows,
  });
}); */
/* app.get("/test", function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );

  res.status(200).json({
    status: "success",
    message: `${process.env.DB_USERNAME} -> Hello world, from Salim Fil Rouge`,
  });
}); */

app.listen(3000, () => {
  console.log("Server running on port 3000 🍎🍎", process.env.DB_USERNAME);
});
