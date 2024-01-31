const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Ok",
  });
});

app.listen(8080, () => {
  console.log(`Server is running on port: 8080`);
});
