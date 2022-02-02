const router = require("express").Router();
const Owners = require("./owners-model");
const { checkId } = require("./owners-middleware");

router.get("/", (req, res, next) => {
  Owners.findAll()
    .then((owners) => {
      res.json(owners);
    })
    .catch(next);
});

router.get("/:id", checkId, (req, res, next) => {
  Owners.findById(req.params.id)
    .then((owners) => {
      res.json(owners);
    })
    .catch(next);
});

router.get("/:id/items", checkId, (req, res, next) => {
  Owners.findItems(req.params.id)
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
