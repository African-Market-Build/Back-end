/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("owners")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("owners").insert([
        { owner_id: 1, username: "javier" },
        { owner_id: 2, username: "brandy" },
        { owner_id: 3, username: "dirk" },
        { owner_id: 4, username: "gabe" },
        { owner_id: 5, username: "hotdog" },
        { owner_id: 6, username: "cheese" },
      ]);
    });
};
