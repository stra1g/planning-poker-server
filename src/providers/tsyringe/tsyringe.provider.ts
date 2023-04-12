import {
	IGamesRepository 
} from '@modules/games/interfaces/game.interface'
import {
	GamesRepository 
} from '@modules/games/repositories/games.repository'
import {
	IPlayersRepository 
} from '@modules/players/interfaces/player.interface'
import {
	PlayersRepository 
} from '@modules/players/repositories/players.repository'
import {
	container 
} from 'tsyringe'

container.registerSingleton<IGamesRepository>('GamesRepository', GamesRepository)

container.registerSingleton<IPlayersRepository>('PlayersRepository', PlayersRepository)
