exports.up = async (knex) => {
  await knex.schema.createTable("owners", (owners) => {
    owners.increments("owner_id");
    owners.string("username", 200).notNullable().unique();
    owners.string("password", 200).notNullable();
    owners.timestamps(false, true);
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists("owners");
};
