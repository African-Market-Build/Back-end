const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const authRouter = require("./auth/authRouter");
const itemsRouter = require("./items/itemsRouter");

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());
server.use("/api/auth", authRouter);
server.use("/api/items", itemsRouter);

server.get("/", (req, res) => {
  res.send("Welcome hahaha");
});

module.exports = server;
