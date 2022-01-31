const db = require("../data/db-config");

const findAll = () => {
  return db("items");
};

const findById = (item_id) => {
  return db("items").where("item_id", item_id);
};
const findBy = (filter) => {
  return db("items").where(filter);
};

const insert = async (item) => {
  const [item_id] = await db("items").insert(item, [
    "item_id",
    "item_name",
    "item_location",
    "item_description",
    "item_price",
    "owner_id",
  ]);
  return item_id;
};

module.exports = {
  findAll,
  findById,
  findBy,
  insert,
};
