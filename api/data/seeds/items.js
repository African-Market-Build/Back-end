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
            item_name: "Apple watch",
            item_location: "philly",
            item_description: "a nice watch, perfect for adults",
            item_price: 300,
            available: true,
            owner_id: 1,
          },
        ]);
      });
  });
};
