const db = require("../data/db-config");

const findAll = () => {
  return db("owners").select("owner_id", "username", "created_at");
};
const findBy = (filter) => {
  return db("owners").where(filter);
};
const findById = (owner_id) => {
  return db("owners")
    .where({ owner_id })
    .select("owner_id", "username", "created_at")
    .first();
};

const findItems = async (id) => {
  const rows = await db("owners")
    .leftJoin("items", "items.owner_id", "owners.owner_id")
    .where("owners.owner_id", id)
    .select(
      "owners.owner_id",
      "owners.username",
      "items.item_id",
      "items.item_name",
      "items.item_location",
      "items.item_description",
      "items.item_price",
      "items.available"
    );

  const filled = {
    owner_id: rows[0].owner_id,
    username: rows[0].username,
    items: [],
  };
  const empty = {
    owner_id: rows[0].owner_id,
    username: rows[0].username,
    items: [],
  };

  const items = rows.map((row) => {
    const item = {
      item_id: row.item_id,
      item_name: row.item_name,
      item_location: row.item_location,
      item_price: row.item_price,
      available: row.item_available,
    };
    return item;
  });

  filled.items.push(...items);
  if (rows[0].item_id === null) {
    return empty;
  } else {
    return filled;
  }
};

const insert = async (user) => {
  const [user_id] = await db("owners").insert(user, ["owner_id", "username"]);
  return user_id;
};

module.exports = {
  findAll,
  findBy,
  findById,
  findItems,
  insert,
};
