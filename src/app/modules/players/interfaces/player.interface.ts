import {
	IBaseRepository 
} from '@common/base/repository'
import {
	Player 
} from '../entities/player.entity'

export abstract class IPlayersRepository extends IBaseRepository<Player>{}
