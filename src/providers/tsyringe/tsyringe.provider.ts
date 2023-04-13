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
	PlayerCardsRepository 
} from '@modules/players/repositories/player-cards.repository'
import {
	container 
} from 'tsyringe'
import {
	IPlayerCardsRepository 
} from '@modules/players/interfaces/player-card.interface'

container.registerSingleton<IGamesRepository>('GamesRepository', GamesRepository)

container.registerSingleton<IPlayersRepository>('PlayersRepository', PlayersRepository)

container.registerSingleton<IPlayerCardsRepository>('PlayerCardsRepository', PlayerCardsRepository)

