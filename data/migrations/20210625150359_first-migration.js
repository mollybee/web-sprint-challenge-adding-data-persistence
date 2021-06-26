
// exports.up = function(knex) {
  
// };

// exports.down = function(knex) {
  
// };

exports.up = function(knex) {
    return knex.schema   //.schema is part of the default syntax
    .createTable("projects", tbl=>{
        tbl.increments("project_id")//Primary Key uses increments
        tbl.string("project_name").notNullable().unique() 
        tbl.string("project_description")
        tbl.integer("project_completed")
            .notNullable()
            .unsigned()
            //.boolean()?
    })
    .createTable("resources", tbl=>{
        tbl.increments("resource_id")
        tbl.string("resource_name").notNullable().unique()
        tbl.string("resource_description")
       
    })
    .createTable("tasks", tbl=>{
        tbl.increments("task_id")
        tbl.string("task_description").notNullable()
        tbl.string("task_notes")
        tbl.integer("task_completed")
            .notNullable()
            .unsigned()
            //.boolean()?
        tbl.integer("project_id")
            .unsigned()
            .notNullable()
            .references("project_id")
            .inTable("projects")
            .onDelete("RESTRICT")
    })
    .createTable("project_resources", tbl=>{
        tbl.increments("project_resources_id")
        tbl.integer("project_id")
            .unsigned()
            .notNullable()
            .references("project_id")
            .inTable("projects")
            .onDelete("RESTRICT")
        tbl.integer("resource_id")
            .unsigned()
            .notNullable()
            .references("resource_id")
            .inTable("resources")
            .onDelete("RESTRICT")
        tbl.integer("quantity")
    })
};


exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects")
};
