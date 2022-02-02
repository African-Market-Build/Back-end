/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("items")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("items").insert([
        {
          item_id: 1,
          item_name: "Iphone",
          item_location: "Florida",
          item_description: "An amazing apple product I use for coding",
          item_price: 1000,
          available: true,
          owner_id: 1,
        },
        {
          item_id: 2,
          item_name: "MacBook Pro",
          item_location: "Florida",
          item_description: "An amazing apple product I use for coding",
          item_price: 1000,
          available: true,
          owner_id: 2,
        },
        {
          item_id: 3,
          item_name: "Painting",
          item_location: "Florida",
          item_description: "beautiful",
          item_price: 1000,
          available: true,
          owner_id: 3,
        },
        {
          item_id: 4,
          item_name: "MacBook Pro",
          item_location: "Florida",
          item_description: "An amazing apple product I use for coding",
          item_price: 1000,
          available: true,
          owner_id: 4,
        },
      ]);
    });
};
