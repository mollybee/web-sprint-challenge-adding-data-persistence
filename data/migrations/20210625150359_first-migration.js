exports.up = function(knex) {
    return knex.schema   //.schema is part of the default syntax
    .createTable("projects", tbl => {
        // Primary Key uses increments
        tbl.increments("project_id");
        tbl.string("project_name")
            .notNullable()
            .unique(); 
        tbl.string("project_description");
        // Requirement: Defaults to `0` (false)
        // Requirement: Boolean
        tbl.boolean("project_completed")
            .notNullable()
            .defaultTo(0);
    })
    .createTable("resources", tbl=> {
        tbl.increments("resource_id");
        tbl.string("resource_name")
            .notNullable()
            .unique();
        tbl.string("resource_description");
    })
    .createTable("tasks", tbl=>{
        tbl.increments("task_id");
        tbl.string("task_description")
            .notNullable();
        tbl.string("task_notes");
        // Requirement: Defaults to `0` (false)
        // Requirement: Boolean
        tbl.boolean("task_completed")
            .notNullable()
            .defaultTo(0);
        tbl.integer("project_id")
            .unsigned()
            .notNullable()
            .references("project_id")
            .inTable("projects")
            .onDelete("RESTRICT");
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
