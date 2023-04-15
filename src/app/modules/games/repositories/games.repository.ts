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
import {
	PlayerCard 
} from '@modules/players/entities/player-card.entity'

export class GamesRepository extends BaseRepository<Game> implements IGamesRepository {
	constructor() {
		super(Game)
	}

	public async findOnePlayer(gameId: string, playerId: string): Promise<Player | undefined> {
		const player = await this.orm.relatedQuery('players').for([gameId]).where('players.id', playerId).first()

		return player ? player as Player : undefined
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

	public async removePlayerCard(gameId: string, playerId: string): Promise<void> {
		await this.orm.relatedQuery('player_cards').for([gameId]).delete().where('player_cards.player_id', playerId)
	}

	public async getPickedCards(gameId: string): Promise<PlayerCard[]> {
		const playerCards = await this.orm.relatedQuery('player_cards').for([gameId])

		return playerCards as PlayerCard[]
	}

	public async listGamesByPlayer(playerId: string): Promise<Game[]> {
		const games = await this.orm.query().whereExists(this.orm.relatedQuery('players').where('players.id', playerId))

		return games as Game[]
	}
}
