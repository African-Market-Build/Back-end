const router = require("express").Router();
const Owners = require("./owners-model");

router.get("/", (req, res, next) => {
  Owners.findAll()
    .then((owners) => {
      res.json(owners);
    })
    .catch(next);
});

router.use = (err, req, res, next) => {
  res.json({
    message: err.message,
    custom: " an error occurred in the owners router",
  });
};

module.exports = router;
