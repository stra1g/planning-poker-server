import {
	Router 
} from 'express'
import {
	GamesController 
} from '../controllers/http/games.controller'

const gameRouter = Router()

gameRouter.post('/', new GamesController().store)

export { gameRouter }
