const router = require("express").Router();
const Users = require("../users/users-model");
const bcrypt = require("bcryptjs");

router.post("/register", (req, res, next) => {
  const { username, password } = req.body;
  const hash = bcrypt.hashSync(password, 8);
  Users.insert({ username, password: hash })
    .then((users) => {
      res.status(201).json(users);
    })
    .catch(next);
});
router.post("/login", (req, res, next) => {});

router.use = (err, req, res, next) => {
  res.json({
    message: err.message,
    custom: "there was an error in the auth router",
  });
};

module.exports = router;
