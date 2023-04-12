import 'reflect-metadata'
import express from 'express'
import '@providers/tsyringe/tsyringe.provider'
import '@infra/database/knex/connection'
import {
	router 
} from '@infra/http/routes/routes'

const app = express()

app.use(express.json())
app.use(router)

export { app }
