import {
	Router 
} from 'express'
import {
	PlayersController 
} from '../controllers/http/players.controller'

const playersRouter = Router()

playersRouter.post('/', new PlayersController().store)

export { playersRouter }
