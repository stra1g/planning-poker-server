import {
	playersRouter 
} from '@modules/players/routes/player.routes'
import {
	gameRouter 
} from 'app/modules/games/routes/game.routes'
import {
	Router 
} from 'express'

const router = Router()

router.use('/games', gameRouter)
router.use('/players', playersRouter)

export { router }
