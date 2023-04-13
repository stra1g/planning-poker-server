import {
	inject, injectable 
} from 'tsyringe'
import {
	IGamesRepository 
} from '../../interfaces/game.interface'
import {
	randomBytes 
} from 'node:crypto'

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
		const hash = randomBytes(20).toString('hex')

		const game = await this.gamesRepository.store({
			name,
			voting_type,
			owner_id,
			hash
		})

		await game.$relatedQuery('players').relate(owner_id)

		return {
			game 
		}
	}
}
