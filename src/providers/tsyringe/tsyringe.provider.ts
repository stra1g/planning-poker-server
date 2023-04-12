import {
	IGamesRepository 
} from 'app/modules/games/interfaces/game.interface'
import {
	GamesRepository 
} from 'app/modules/games/repositories/games.repository'
import {
	container 
} from 'tsyringe'

container.registerSingleton<IGamesRepository>('GamesRepository', GamesRepository)
