const path = require("path");
const express = require("express");
const hbs = require("hbs");

// console.log(__dirname);
// console.log(path.join(__dirname, "../public"));

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlerbars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Mohd Zaid",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Mohd Zaid ",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    helpText: "This is my some my  helpful  Text",
    title: "Help",
    name: "Mohd Zaid",
  });
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "It is working",
    location: "India",
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Mohd Zaid",
    errorMessage: "Help article not found.",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Mohd Zaid",
    errorMessage: "Page not found",
  });
});

// /////////////lISTINING ON PORT
app.listen(3000, () => {
  console.log("Server running on 3000");
});
