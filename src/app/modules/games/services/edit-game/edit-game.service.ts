import {
	inject,
	injectable 
} from 'tsyringe'
import {
	IGamesRepository 
} from '../../interfaces/game.interface'

type EditGameRequest = {
  game_id: string
  name: string
}

@injectable()
export class EditGameService {
	constructor(
    @inject('GamesRepository')
    private readonly gamesRepository: IGamesRepository
	) {}

	public async run({ game_id, ...payload }: EditGameRequest) {
		const game = await this.gamesRepository.editById(
			game_id,
			payload
		)

		return {
			game 
		}
	}
}
