import {
	Model 
} from 'objection'
import Knex from 'knex'

const knex = Knex({
	client: 'postgres',
	connection: {
		host: 'localhost',
		password: 'postgres',
		user: 'postgres',
		database: 'planning_poker_db',
		port: 5432
	}
})

Model.knex(knex)
