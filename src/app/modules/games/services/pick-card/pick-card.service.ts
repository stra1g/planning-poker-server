import {
	IGamesRepository 
} from '@modules/games/interfaces/game.interface'
import {
	inject,
	injectable 
} from 'tsyringe'

type PickCardRequest = {
  card_value: string
  player_id: string
  game_code: string
}

@injectable()
export class PickCardService {
	constructor(
    @inject('GamesRepository')
    private readonly gamesRepository: IGamesRepository
	) {}

	public async run({ card_value, game_code, player_id }: PickCardRequest) {
		const foundGame = await this.gamesRepository.findOneBy('hash', game_code)

		if (!foundGame) return null
    
		const player = await this.gamesRepository.findOnePlayer(foundGame.id, player_id)

		if (!player) return null

		await player.$relatedQuery('player_cards').insert({
			card_value,
			player_id,
			game_id: foundGame.id
		})
	}
}
