import {
	BaseEntity 
} from '@infra/database/knex/base/entity/base-entity.entity'
import {
	Game 
} from '@modules/games/entities/game.entity'
import {
	RelationMappings, RelationMappingsThunk 
} from 'objection'
import {
	PlayerCard 
} from './player-card.entity'

export class Player extends BaseEntity{
	static get tableName() {
		return 'players'
	}

	public name: string

	static relationMappings: RelationMappings | RelationMappingsThunk = {
		games: {
			relation: Player.HasManyRelation,
			modelClass: Game,
			join: {
				from: 'games.owner_id',
				to: 'players.id'
			}
		},
		player_cards: {
			relation: Player.HasManyRelation,
			modelClass: PlayerCard,
			join: {
				from: 'players.id',
				to: 'player_cards.player_id'
			}
		}
	}
}
