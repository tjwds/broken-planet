import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('images', (table) => {
        table.increments('id');
        table.string('file_location');
        table.integer('age');
        table.boolean('is_messed_up');
        table.boolean('has_been_judged');
        table.boolean('has_been_posted');
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('images');
}

