const messages = [
  {
    text: "Hi there!",
    user: "Armando",
    added: new Date().toLocaleDateString(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toLocaleDateString(),
  },
  {
    text: "Wenaaaaaaaaaaaaaaa!!",
    user: "Rony",
    added: new Date().toLocaleDateString(),
  },
];

const express = require("express");
const app = express();
const path = require("node:path");
const PORT = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

app.listen(PORT, () => {
  console.log("App Listen in port: 3000");
});
