const Users = require("./users-model");

const checkBody = (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(401).json({ message: "username and password are required" });
  } else {
    next();
  }
};

const checkExists = async (req, res, next) => {
  const user = await Users.findAll();
  const exists = user.some((user) => user.username === req.body.username);
  if (exists) {
    res.status(422).json({ message: "That username is already taken" });
  } else {
    next();
  }
};

module.exports = {
  checkBody,
  checkExists,
};
