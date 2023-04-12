import {
	BaseEntity 
} from '@infra/database/knex/base/entity/base-entity.entity'

export class Game extends BaseEntity{
	static get tableName() {
		return 'games'
	}

	public name: string
  
	public voting_type: string
}
