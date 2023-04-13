import {
	BaseEntity 
} from '@common/base/entity'
import {
	RelationMappings, RelationMappingsThunk 
} from 'objection'

export class PlayerCard extends BaseEntity {
	static get tableName() {
		return 'player_cards'
	}
  
	public player_id: string

	public game_id: string

	public card_value: string

	static relationMappings: RelationMappings | RelationMappingsThunk = {
	}
}

