import {
	Game 
} from '../entities/game.entity'
import {
	BaseRepository 
} from '@infra/database/knex/base/repository/base-repository.repository'
import {
	IGamesRepository 
} from '../interfaces/game.interface'
import {
	Model 
} from 'objection'

export class GamesRepository extends BaseRepository<Game> implements IGamesRepository {
	constructor() {
		super(Game)
	}

	public async listPlayers(gameId: string): Promise<Model[]> {
		return this.orm.relatedQuery('players').for([gameId])
	}

	public async findOnePlayer(gameId: string, playerId: string): Promise<Model | undefined> {
		return this.orm.relatedQuery('players').for([gameId]).where('players.id', playerId).first()
	}

	public async attachPlayer(gameId: string, playerId: string): Promise<void> {
		await this.orm.relatedQuery('players').for([gameId]).relate(playerId)
	}
}
