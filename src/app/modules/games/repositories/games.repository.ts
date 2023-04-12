import {
	BaseRepository 
} from 'infra/database/typeorm/repositories/base.repository'
import {
	IGamesRepository 
} from '../interfaces/game.interface'
import {
	Game 
} from '../entities/game.entity'

export class GamesRepository extends BaseRepository<Game> implements IGamesRepository {}
