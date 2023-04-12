import {
	Game 
} from '../entities/game.entity'
import {
	BaseRepository 
} from '@infra/database/knex/base/repository/base-repository.repository'
import {
	IGamesRepository 
} from '../interfaces/game.interface'

export class GamesRepository extends BaseRepository<Game> implements IGamesRepository {
	constructor() {
		super(Game)
	}
}
