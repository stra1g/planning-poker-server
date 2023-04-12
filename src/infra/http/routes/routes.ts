import {
	gameRouter 
} from 'app/modules/games/routes/game.routes'
import {
	Router 
} from 'express'

const router = Router()

router.use('/games', gameRouter)

export { router }
