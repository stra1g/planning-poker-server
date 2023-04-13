import type {
	Knex 
} from 'knex'

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
	development: {
		client: 'postgresql',
		connection: {
			database: 'planning_poker_db',
			user: 'postgres',
			password: 'postgres',
			host: 'localhost',
			port: 5432
		},
		migrations: {
			tableName: 'migrations',
			directory: './src/infra/database/knex/migrations',
			extension: 'ts'
		},
		debug: true
	},

	staging: {
		client: 'postgresql',
		connection: {
			database: 'my_db',
			user: 'username',
			password: 'password'
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: 'knex_migrations'
		}
	},

	production: {
		client: 'postgresql',
		connection: {
			database: 'my_db',
			user: 'username',
			password: 'password'
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: 'knex_migrations'
		}
	}

}

module.exports = config
