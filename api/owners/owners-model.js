const db = require("../data/db-config");

const findAll = () => {
  return db("owners");
};
const findBy = (filter) => {
  return db("owners").where(filter);
};
const findById = (owner_id) => {
  return db("owners").where({ owner_id }).first();
};

const insert = async (user) => {
  const [user_id] = await db("owners").insert(user, ["owner_id", "username"]);
  return user_id;
};

module.exports = {
  findAll,
  findBy,
  findById,
  insert,
};
