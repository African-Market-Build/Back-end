exports.up = async (knex) => {
  await knex.schema
    .createTable("owners", (owners) => {
      owners.increments("owner_id");
      owners.string("username", 200).notNullable().unique();
      owners.string("password", 200).notNullable();
      owners.timestamps(false, true);
    })
    .createTable("items", (items) => {
      items.increments("items_id");
      items.string("item_name", 200).notNullable();
      items.string("item_location", 200).notNullable();
      items.string("item_description", 200).notNullable();
      items.integer("items_price").notNullable();
      items.integer("available").defaultsTo(false);
      items
        .integer("owner_id")
        .notNullable()
        .references("owner_id")
        .inTable("owners")
        .unSigned();
    });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists("items");
  await knex.schema.dropTableIfExists("owners");
};
