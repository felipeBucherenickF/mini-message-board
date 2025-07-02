const { Router } = require("express");

const messageRouter = Router();
const { getMessages } = require("../controllers/getMessages");

messageRouter.get("/", getMessages);

module.exports = messageRouter;
