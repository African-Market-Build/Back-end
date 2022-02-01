const db = require("../data/db-config");

const findAll = () => {
  return db("items");
};

const findById = (item_id) => {
  return db("items").where("item_id", item_id).first();
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
    "available",
    "owner_id",
  ]);
  return item_id;
};

const update = async (item_id, item) => {
  await db("items").update(item).where("item_id", item_id);
  return findById(item_id);
};

const remove = async (item_id) => {
  await db("items").delete().where({ item_id });
  return findAll();
};

module.exports = {
  findAll,
  findById,
  findBy,
  insert,
  update,
  remove,
};
