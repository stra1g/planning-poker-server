import express from 'express'
import { logger } from './helpers/logger.helper'

const app = express()

const port = process.env.PORT || 3333

app.listen(port, () => {
	logger.info(`[HTTP Server] Running on port ${port}`)
})
