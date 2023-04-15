import {
	IGamesRepository 
} from '@modules/games/interfaces/game.interface'
import {
	inject,
	injectable 
} from 'tsyringe'

type RevealCardsRequest = {
  game_code: string
  player_id: string
}

@injectable()
export class RevealCardsService {
	constructor(
    @inject('GamesRepository')
    private readonly gamesRepository: IGamesRepository
	) {}

	public async run({ game_code, player_id }: RevealCardsRequest) {
		const foundGame = await this.gamesRepository.findOneBy('hash', game_code)

		if (!foundGame) return null

		const player = await this.gamesRepository.findOnePlayer(foundGame.id, player_id)

		if (!player) return null

		const pickedCards = await this.gamesRepository.getPickedCards(foundGame.id)

		return {
			picked_cards: pickedCards
		}
	}
}
