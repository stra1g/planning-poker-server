import {
	IGamesRepository 
} from '@modules/games/interfaces/game.interface'
import {
	randomBytes,
	randomUUID 
} from 'crypto'
import {
	CreateGameService 
} from './create-game.service'

type MockGamesRepository = IGamesRepository & { store: jest.Mock, attachPlayer: jest.Mock }

describe('Create a game', () => {
	let service: CreateGameService
	let gamesRepository: MockGamesRepository
  
	beforeEach(() => {
		gamesRepository = {
			store: jest.fn(),
			attachPlayer: jest.fn()
		} as unknown as MockGamesRepository
		service = new CreateGameService(gamesRepository)
	})

	it('should be able to create a game', async () => {
		const dto = {
			name: 'Test game',
			voting_type: 'fibonacci',
			owner_id: randomUUID()
		}

		const mockReturn = {
			id: randomUUID(),
			name: dto.name,
			voting_type: dto.voting_type,
			owner_id: dto.owner_id,
			hash: randomBytes(20).toString('hex'),
			is_deleted: false,
			deleted_at: null,
			created_at: new Date().toString(),
			updated_at: new Date().toString(),
		}

		gamesRepository.store.mockResolvedValue(mockReturn)
		gamesRepository.attachPlayer.mockResolvedValue(undefined)

		const { game } = await service.run(dto)

		expect(game).toHaveProperty('id')
		expect(game).toHaveProperty('hash')
		expect(game).toHaveProperty('name')
		expect(game.name).toBe(dto.name)
		expect(game.voting_type).toBe(dto.voting_type)
		expect(game.owner_id).toBe(dto.owner_id)
		expect(game.is_deleted).toBe(false)
		expect(game.deleted_at).toBeNull()
	})
})
