import {
	IBaseRepository 
} from '@common/base/repository'
import {
	Game 
} from '../entities/game.entity'
import {
	Player 
} from '@modules/players/entities/player.entity'

export abstract class IGamesRepository extends IBaseRepository<Game>{
  abstract findOnePlayer(gameId: string, playerId: string): Promise<Player | undefined>
  abstract attachPlayer(gameId: string, playerId: string): Promise<void>
  abstract attachPlayerCard(gameId: string, playerId: string, cardValue: string): Promise<void>
  abstract removePlayerCard(gameId: string, playerId: string): Promise<void>
}
