import {
	BaseEntity 
} from '@infra/database/knex/base/entity/base-entity.entity'
import {
	Player 
} from '@modules/players/entities/player.entity'
import {
	RelationMappings, RelationMappingsThunk 
} from 'objection'

export class Game extends BaseEntity {
	static get tableName() {
		return 'games'
	}

	public name: string
  
	public voting_type: string

	public owner_id: string

	public hash: string

	static relationMappings: RelationMappings | RelationMappingsThunk = {
		owner: {
			relation: Game.BelongsToOneRelation,
			modelClass: Player,
			join: {
				from: 'games.owner_id',
				to: 'players.id'
			}
		},
		players: {
			relation: Game.ManyToManyRelation,
			modelClass: Player,
			join: {
				from: 'games.id',
				through: {
					from: 'game_players.game_id',
					to: 'game_players.player_id'
				},
				to: 'players.id'
			}
		}
	}
}
