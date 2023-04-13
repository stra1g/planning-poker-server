import {
	PlayerCard
} from '../entities/player-card.entity'
import {
	BaseRepository 
} from '@infra/database/knex/base/repository/base-repository.repository'
import {
	IPlayerCardsRepository 
} from '../interfaces/player-card.interface'

export class PlayerCardsRepository extends BaseRepository<PlayerCard> implements IPlayerCardsRepository {
	constructor() {
		super(PlayerCard)
	}
}
