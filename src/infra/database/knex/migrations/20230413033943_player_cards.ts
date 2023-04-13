import {
	Knex 
} from 'knex'

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('player_cards', (table) => {
		table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))

		table
			.uuid('player_id')
			.notNullable()
			.references('id')
			.inTable('players')
			.unsigned()
			.onDelete('CASCADE')
			.onUpdate('CASCADE')
    
		table
			.uuid('game_id')
			.notNullable()
			.references('id')
			.inTable('games')
			.unsigned()
			.onDelete('CASCADE')
			.onUpdate('CASCADE')
      
		table.string('card_value').notNullable()

		table.timestamp('created_at').defaultTo(knex.fn.now())
	})
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('player_cards')
}

