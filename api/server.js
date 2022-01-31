const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const authRouter = require("./auth/authRouter");
const itemsRouter = require("./items/itemsRouter");
const restricted = require("./items/restricted");

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());
server.use("/api/auth", authRouter);
server.use("/api/items", restricted, itemsRouter);

server.get("/", (req, res) => {
  res.send("Welcome hahaha");
});

module.exports = server;
