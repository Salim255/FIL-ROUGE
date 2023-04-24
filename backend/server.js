const express = require("express");

const app = express();

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
