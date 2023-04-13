import {
	IBaseRepository 
} from '@common/base/repository'
import {
	PlayerCard
} from '../entities/player-card.entity'

export abstract class IPlayerCardsRepository extends IBaseRepository<PlayerCard>{}
