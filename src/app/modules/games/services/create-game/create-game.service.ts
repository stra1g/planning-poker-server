import {
	inject, injectable 
} from 'tsyringe'
import {
	IGamesRepository 
} from '../../interfaces/game.interface'

type CreateGameRequest = {
  name: string
  voting_type: string
  owner_id: string
}

@injectable()
export class CreateGameService {
	constructor(
    @inject('GamesRepository')
    private readonly gamesRepository: IGamesRepository
	) {}

	public async run({ name, voting_type, owner_id }: CreateGameRequest) {	
		const game = await this.gamesRepository.store({
			name,
			voting_type,
			owner_id
		})

		return {
			game 
		}
	}
}
