import {
	Knex 
} from 'knex'

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('games', (table) => {
		table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))

		table.string('name').notNullable()
		table.string('voting_type').notNullable()
		table
			.uuid('owner_id')
			.notNullable()
			.references('id')
			.inTable('players')
			.unsigned()
			.onDelete('CASCADE')
			.onUpdate('CASCADE')
		table.string('hash').notNullable()

		table.boolean('is_deleted').defaultTo(false)
		table.timestamp('deleted_at').nullable().defaultTo(null)
		table.timestamp('created_at').defaultTo(knex.fn.now())
		table.timestamp('updated_at').defaultTo(knex.fn.now())
	})
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('games')
}

