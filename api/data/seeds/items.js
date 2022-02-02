/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("owners").then(() => {
    // Inserts seed entries
    return knex("owners")
      .insert([{ username: "javier", password: "1234" }])
      .then(() => {
        return knex("items").insert([
          {
            item_name: "cup",
            item_location: "philly",
            item_description: "a beautiful cup",
            item_price: 12,
            available: false,
            owner_id: 1,
          },
        ]);
      });
  });
};
