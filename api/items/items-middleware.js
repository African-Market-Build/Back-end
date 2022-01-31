const Owners = require("../owners/owners-model");

const checkId = async (req, res, next) => {
  const { owner_id } = req.body;
  const owner = await Owners.findAll();
  const exist = owner.some((o) => o.owner_id === owner_id);
  if (!exist) {
    res
      .status(404)
      .json({ message: `owner with id ${owner_id} does not exist` });
  } else {
    next();
  }
};

const checkBody = async (req, res, next) => {
  const { item_name, item_location, item_description, item_price, owner_id } =
    req.body;
  if (
    !item_name ||
    !item_location ||
    !item_description ||
    !item_price ||
    !owner_id
  ) {
    res.status(404).json({ message: "Please fill out all required fields" });
  } else {
    next();
  }
};

module.exports = {
  checkId,
  checkBody,
};
