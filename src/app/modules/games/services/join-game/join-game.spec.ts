import {
	IGamesRepository 
} from '@modules/games/interfaces/game.interface'
import {
	randomBytes, randomUUID 
} from 'crypto'
import {
	JoinGameService 
} from './join-game.service'

type MockGamesRepository = IGamesRepository & { findOneBy: jest.Mock, attachPlayer: jest.Mock }

describe('Join game', () => {
	let service: JoinGameService
	let gamesRepository: MockGamesRepository
  
	beforeEach(() => {
		gamesRepository = {
			findOneBy: jest.fn(),
			attachPlayer: jest.fn()
		} as unknown as MockGamesRepository
		service = new JoinGameService(gamesRepository)
	})

	it('should not be able to join in a game if it does not exists', async () => {
		const dto = {
			game_code: randomBytes(20).toString('hex'),
			player_id: randomUUID()
		}

		gamesRepository.findOneBy.mockResolvedValue(undefined)

		const response = await service.run(dto)

		expect(response).toBeNull()
	})

	it('should be able to join in a game', async () => {
		const dto = {
			game_code: randomBytes(20).toString('hex'),
			player_id: randomUUID()
		}

		const mockReturn = {
			id: randomUUID(),
			name: 'Test game',
			voting_type: 'fibonacci',
			owner_id: randomUUID(),
			hash: randomBytes(20).toString('hex'),
			is_deleted: false,
			deleted_at: null,
			created_at: new Date().toString(),
			updated_at: new Date().toString(),
		}

		gamesRepository.findOneBy.mockResolvedValue(mockReturn)
		gamesRepository.attachPlayer.mockResolvedValue(undefined)

		const response = await service.run(dto)

		expect(response).not.toBeNull()
		expect(response).toBeUndefined()
	})
})
