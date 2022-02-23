exports.up = async (knex) => {
    await knex.schema.createTable("newschema", (tbl) => {
      tbl.increments();
      tbl.text("firstname");
      tbl.text("lastname");
      tbl.text("email");
    });
  };
  
  exports.down = async (knex) => {
    await knex.schema.dropTableIfExists("newschema");
  };
  