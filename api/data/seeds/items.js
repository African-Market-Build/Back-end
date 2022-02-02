/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("owners").then(() => {
    // Inserts seed entries
    return knex("owners")
      .insert([
        { username: "javier", password: "1234" },
        { username: "laysha", password: "1234" },
        { username: "jay", password: "1234" },
        { username: "johny", password: "1234" },
        { username: "rebecca", password: "1234" },
      ])

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
          {
            item_name: "  PS5",
            item_location: "philly",
            item_description: "a device I am overcharging for",
            item_price: 1200,
            available: true,
            owner_id: 2,
          },
          {
            item_name: "Jordan 1s",
            item_location: "Florida",
            item_description: "My favorite pair of sneaks",
            item_price: 900,
            available: true,
            owner_id: 3,
          },
          {
            item_name: "MacBook Pro",
            item_location: "Georgia",
            item_description: "an amazing device I use for coding",
            item_price: 1400,
            available: true,
            owner_id: 4,
          },
          {
            item_name: "Painting",
            item_location: "philly",
            item_description: "an ancient piece of art",
            item_price: 12000,
            available: true,
            owner_id: 5,
          },
        ]);
      });
  });
};
