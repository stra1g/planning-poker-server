import 'reflect-metadata'
import 'express-async-errors'
import express, {
	NextFunction,
	Request, Response 
} from 'express'
import '@providers/tsyringe/tsyringe.provider'
import '@infra/database/knex/connection'
import {
	router 
} from '@infra/http/routes/routes'
import {
	ValidationException 
} from './exceptions/ValidationException'

const app = express()

app.use(express.json())
app.use(router)

app.use(
	(err: Error, request: Request, response: Response, next: NextFunction) => {
		if (err instanceof ValidationException) {
			return response.status(err.statusCode).json({
				message: err.message,
				errors: err.errors
			})
		}

		response.status(500).json({
			status: 'error',
			message: `Internal server error - ${err.message}`,
		})

		return next()
	}
)

export { app }
