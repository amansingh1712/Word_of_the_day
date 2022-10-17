const express = require("express");

const fs = require("fs");

const PORT = process.env.PORT || 8080;

const app = express();

app.get("/", (req, res) => {
  fs.readFile("./db.json", "utf-8", (err, data) => {
    if (err) {
      console.log("err:", err);
    } else {
      const words = JSON.parse(data);
      res.send([words[Math.floor(Math.random() * words.length)]]);
    }
  });
});

app.listen(PORT, () => {
  console.log(`listening on Port : ${PORT}`);
});
