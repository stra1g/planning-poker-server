import {
	IPlayersRepository 
} from '@modules/players/interfaces/player.interface'
import {
	inject, injectable 
} from 'tsyringe'

type CreatePlayerRequest = { 
  name: string
}

@injectable()
export class CreatePlayerService {
	constructor(
    @inject('PlayersRepository')
    private readonly playersRepository: IPlayersRepository,
	) {}

	public async run({ name }: CreatePlayerRequest) {
		const player = await this.playersRepository.store({
			name 
		})

		return {
			player
		}
	}
}
