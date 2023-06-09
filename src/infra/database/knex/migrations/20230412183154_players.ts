import {
	Knex 
} from 'knex'

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('players', (table) => {
		table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))

		table.string('name').notNullable()
    
		table.boolean('is_deleted').defaultTo(false)
		table.timestamp('deleted_at').nullable().defaultTo(null)
		table.timestamp('created_at').defaultTo(knex.fn.now())
		table.timestamp('updated_at').defaultTo(knex.fn.now())
	})
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('players')
}

