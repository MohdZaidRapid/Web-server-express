const path = require("path");
const express = require("express");

// console.log(__dirname);
// console.log(path.join(__dirname, "../public"));

const app = express();

const publicDirectoryPath = path.join(__dirname, "../public");
app.use(express.static(publicDirectoryPath));





app.listen(3000, () => {
  console.log("Server running on 3000");
});
