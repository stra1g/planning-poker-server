import { IGamesRepository } from '../../repositories/games.repository'

type CreateGameRequest = {
  name: string
  voting_type: string
}

export class CreateGameService {
	constructor(private readonly gamesRepository: IGamesRepository) {}

	public async run({ name, voting_type }: CreateGameRequest) {	
		await this.gamesRepository.store({
			name,
			voting_type
		})
	}
}
