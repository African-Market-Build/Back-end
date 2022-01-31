const router = require("express").Router();
const Owners = require("../owners/owners-model");
const bcrypt = require("bcryptjs");
const createToken = require("./auth-create-token");
const { checkBody, checkExists } = require("../owners/owners-middleware");

router.post("/register", checkBody, checkExists, (req, res, next) => {
  const { username, password } = req.body;
  const hash = bcrypt.hashSync(password, 8);
  Owners.insert({ username, password: hash })
    .then((users) => {
      res.status(201).json(users);
    })
    .catch(next);
});
router.post("/login", checkBody, (req, res, next) => {
  let { username, password } = req.body;
  Owners.findBy({ username })
    .then(([user]) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = createToken(user);
        res.json({ message: `welcome, ${username}`, token });
      } else {
        res.status(401).json({ message: `invalid credentials` });
      }
    })
    .catch(next);
});

router.use = (err, req, res, next) => {
  res.json({
    message: err.message,
    custom: "there was an error in the auth router",
  });
};

module.exports = router;
