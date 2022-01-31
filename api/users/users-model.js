const db = require("../data/db-config");

const findAll = () => {
  return db("users");
};
const findBy = (filter) => {
  return db("users").where(filter);
};
const findById = (user_id) => {
  return db("users").where({ user_id }).first();
};

const insert = async (user) => {
  const [user_id] = await db("users").insert(user, ["user_id", "username"]);
  return user_id;
};

module.exports = {
  findAll,
  findBy,
  findById,
  insert,
};
