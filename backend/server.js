const express = require("express");
const app = express();
app.get("/test", function (req, res) {
  res.status(200).json({
    status: "success",
    message: "Hello world, from Salim Fil Rouge",
  });
});

app.listen(3000);
