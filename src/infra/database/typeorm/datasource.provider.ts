import {
	logger 
} from '@helpers/logger.helper'
import {
	DataSource 
} from 'typeorm'

const AppDataSource = new DataSource({
	type: 'postgres',
	host: 'localhost',
	port: 5432,
	username: 'postgres',
	password: 'postgres',
	database: 'planning_poker_db',
	entities: ['../../../app/modules/**/entities/*.entity.ts']
})

AppDataSource.initialize()
	.then(() => {
		logger.info('[Database] Data Source has been initialized!')
	})
	.catch((err) => {
		logger.error('[Database] Error during Data Source initialization')
		logger.error(err)
	})
