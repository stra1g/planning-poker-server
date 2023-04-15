import {
	IGamesRepository 
} from '@modules/games/interfaces/game.interface'
import {
	randomBytes,
	randomUUID 
} from 'crypto'
import {
	ListGamesByPlayerService 
} from './list-games-by-player.service'

type MockGamesRepository = IGamesRepository & { listGamesByPlayer: jest.Mock }

describe('List games by player', () => {
	let service: ListGamesByPlayerService
	let gamesRepository: MockGamesRepository
  
	beforeEach(() => {
		gamesRepository = {
			listGamesByPlayer: jest.fn(),
		} as unknown as MockGamesRepository
		service = new ListGamesByPlayerService(gamesRepository)
	})

	it('should be able to list all games of a player', async () => {
		const playerId = randomUUID()

		const mockReturn = [
			{
				id: randomUUID(),
				name: 'Game 1',
				voting_type: 'fibonacci',
				owner_id: playerId,
				hash: randomBytes(20).toString('hex'),
				is_deleted: false,
				deleted_at: null,
				created_at: new Date().toString(),
				updated_at: new Date().toString(),
			},
			{
				id: randomUUID(),
				name: 'Game 2',
				voting_type: 'fibonacci',
				owner_id: playerId,
				hash: randomBytes(20).toString('hex'),
				is_deleted: false,
				deleted_at: null,
				created_at: new Date().toString(),
				updated_at: new Date().toString(),
			},
		]

		gamesRepository.listGamesByPlayer.mockResolvedValue(mockReturn)

		const { games } = await service.run(playerId)

		expect(games).toBeInstanceOf(Array)
		expect(games).toHaveLength(2)
		for (const game of games) expect(game.owner_id).toBe(playerId)
	})
})
