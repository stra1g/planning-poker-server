import {
	IBaseRepository 
} from '@common/base/repository'
import {
	Game 
} from '../entities/game.entity'
import {
	Model 
} from 'objection'

export abstract class IGamesRepository extends IBaseRepository<Game>{
	abstract listPlayers(gameId: string): Promise<Model[]>
  abstract findOnePlayer(gameId: string, playerId: string): Promise<Model | undefined>
  abstract attachPlayer(gameId: string, playerId: string): Promise<void>
  abstract attachPlayerCard(gameId: string, playerId: string, cardValue: string): Promise<void>
}
