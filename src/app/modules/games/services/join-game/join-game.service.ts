import {
	IGamesRepository 
} from '@modules/games/interfaces/game.interface'
import {
	inject,
	injectable 
} from 'tsyringe'

type JoinGameRequest = {
  game_code: string
  player_id: string
}

@injectable()
export class JoinGameService {
	constructor(
    @inject('GamesRepository')
    private readonly gamesRepository: IGamesRepository
	) {}

	public async run({ game_code, player_id }: JoinGameRequest) {
		const foundGame = await this.gamesRepository.findOneBy('hash', game_code)

		if (!foundGame) return null

		await this.gamesRepository.attachPlayer(foundGame.id, player_id)
	}
}
