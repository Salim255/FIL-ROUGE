const express = require("express");
const app = express();
app.get("/", function (req, res) {
  res.status(200).json({
    status: "success",
    message: "Hello world",
  });
});

app.listen(3000);
