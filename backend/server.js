const express = require("express");
//pg is a nodejs modlues that allows us to connect and work with postgres
const app = express();
//We use pg to creat a connection over pool tool sever
const pg = require("pg");
const pool = new pg.Pool({
  host: "postgres",
  database: process.env.POSTGRES_DB,
  user: process.env.DB_USERNAME, //The same username in docker compose postgres_user
  password: process.env.POSTGRES_PASSWORD, //
});
//To test if the connection is stablished

pool.query("SELECT 1 +1 ;").then((res) => console.log(res));

//
app.get("/test", function (req, res) {
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
});

app.listen(3000, () => {
  console.log("Server running on port 3000 🍎🍎", process.env.DB_USERNAME);
});
