const path = require("path");
const express = require("express");

// console.log(__dirname);
// console.log(path.join(__dirname, "../public"));

const app = express();

const publicDirectoryPath = path.join(__dirname, "../public");

app.set("view engine", "hbs");
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log("Server running on 3000");
});
