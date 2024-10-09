var express = require("express");

var app = express();

app.get("/", (req, res) => {
  return res.send("A sample node.js back-end");
});

app.listen(3000, () => {
  console.log("Listening on port" + 3000);
});
