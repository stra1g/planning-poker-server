import {
	inject 
} from 'tsyringe'
import {
	IGamesRepository 
} from '../../interfaces/game.interface'

type CreateGameRequest = {
  name: string
  voting_type: string
}

export class CreateGameService {
	constructor(
    @inject('GamesRepository')
    private readonly gamesRepository: IGamesRepository
	) {}

	public async run({ name, voting_type }: CreateGameRequest) {	
		await this.gamesRepository.store({
			name,
			voting_type
		})
	}
}
