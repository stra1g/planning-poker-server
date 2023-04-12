import 'reflect-metadata'
import express from 'express'
import {
	logger 
} from '@helpers/logger.helper'
import '@infra/database/typeorm/datasource.provider'
import '@providers/tsyringe/tsyringe.provider'
import {
	router 
} from '@infra/http/routes/routes'

const app = express()

app.use(express.json())
app.use(router)

const port = process.env.PORT || 3333

app.listen(port, () => {
	logger.info(`[HTTP Server] Running on port ${port}`)
})
