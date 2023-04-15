import {
	Game 
} from '@modules/games/entities/game.entity'
import {
	IGamesRepository 
} from '@modules/games/interfaces/game.interface'
import {
	inject, injectable 
} from 'tsyringe'

@injectable()
export class ListGamesByPlayerService {
	constructor(
    @inject('GamesRepository')
    private gamesRepository: IGamesRepository,
	) {}

	async run(player_id: string): Promise<{ games: Game[] }> {
		const games = await this.gamesRepository.listGamesByPlayer(player_id)

		return {
			games 
		}
	}
}
