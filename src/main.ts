import 'reflect-metadata'
import express from 'express'
import {
	logger 
} from '@helpers/logger.helper'
import '@infra/database/typeorm/datasource.provider'
import '@providers/tsyringe/tsyringe.provider'

const app = express()

const port = process.env.PORT || 3333

app.listen(port, () => {
	logger.info(`[HTTP Server] Running on port ${port}`)
})
