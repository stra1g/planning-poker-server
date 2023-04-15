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
	Player 
} from '@modules/players/entities/player.entity'

export class GamesRepository extends BaseRepository<Game> implements IGamesRepository {
	constructor() {
		super(Game)
	}

	public async findOnePlayer(gameId: string, playerId: string): Promise<Player | undefined> {
		const player = await this.orm.relatedQuery('players').for([gameId]).where('players.id', playerId).first()

		return player ? Player.fromJson(player) : undefined
	}

	public async attachPlayer(gameId: string, playerId: string): Promise<void> {
		await this.orm.relatedQuery('players').for([gameId]).relate(playerId)
	}

	public async attachPlayerCard(gameId: string, playerId: string, cardValue: string): Promise<void> {
		await this.orm.relatedQuery('player_cards').for([gameId]).insert({
			card_value: cardValue,
			player_id: playerId,
			game_id: gameId
		})
	}
}
