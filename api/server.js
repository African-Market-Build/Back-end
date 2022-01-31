const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const authRouter = require("./auth/authRouter");
const itemsRouter = require("./items/itemsRouter");
const restricted = require("./items/restricted");
const ownersRouter = require("./owners/ownersRouter");

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());
server.use("/api/auth", authRouter);
server.use("/api/items", restricted, itemsRouter);
server.use("/api/owners", ownersRouter);

server.get("/", (req, res) => {
  res.send("Welcome hahaha");
});

module.exports = server;
