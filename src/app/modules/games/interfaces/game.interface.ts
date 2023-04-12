import {
	IBaseRepository 
} from '@common/base/repository'
import {
	Game 
} from '../entities/game.entity'

export abstract class IGamesRepository extends IBaseRepository<Game>{}
