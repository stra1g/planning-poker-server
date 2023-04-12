import {
	Player
} from '../entities/player.entity'
import {
	BaseRepository 
} from '@infra/database/knex/base/repository/base-repository.repository'
import {
	IPlayersRepository 
} from '../interfaces/player.interface'

export class PlayersRepository extends BaseRepository<Player> implements IPlayersRepository {
	constructor() {
		super(Player)
	}
}
