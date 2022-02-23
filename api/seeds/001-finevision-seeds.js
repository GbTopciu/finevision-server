const { getMaxListeners } = require("../server");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("newschema")
    .truncate()
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("newschema").insert([
        {
          firstname: "John",
          lastname: "Doe",
          emal:"john.doe@getMaxListeners.com"
        },
        {
          firstname: "John1",
          lastname: "Doe1",
          emal:"john.doe@getMaxListeners.com1"
        },
        {
          firstname: "John2",
          lastname: "Doe2",
          emal:"john.doe@getMaxListeners.com2"
        },
      ]);
    });
};
