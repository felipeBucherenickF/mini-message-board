const express = require("express");
const messageRouter = require("./routers/messageRouter");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Mini Message Board");
});

app.use("/messages", messageRouter);

app.listen(PORT, () => {
  console.log("App Listen in port: 3000");
});
