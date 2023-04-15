import {
	IGamesRepository 
} from '@modules/games/interfaces/game.interface'
import {
	randomBytes,
	randomUUID 
} from 'crypto'
import {
	EditGameService 
} from './edit-game.service'

type MockGamesRepository = IGamesRepository & { editById: jest.Mock }

describe('Edit a game', () => {
	let service: EditGameService
	let gamesRepository: MockGamesRepository
  
	beforeEach(() => {
		gamesRepository = {
			editById: jest.fn()		
		} as unknown as MockGamesRepository
		service = new EditGameService(gamesRepository)
	})

	it('should be able to edit a game', async () => {
		const dto = {
			game_id: randomUUID(),
			name: 'Edit game name',
		}

		const mockReturn = {
			id: dto.game_id,
			name: dto.name,
			voting_type: 'fibonacci',
			owner_id: randomUUID(),
			hash: randomBytes(20).toString('hex'),
			is_deleted: false,
			deleted_at: null,
			created_at: new Date().getTime() - 10 * 60000, // date 10 minutes ago
			updated_at: new Date().toString(),
		}

		gamesRepository.editById.mockResolvedValue(mockReturn)

		const { game } = await service.run(dto)

		expect(game).toHaveProperty('id')
		expect(game).toHaveProperty('hash')
		expect(game).toHaveProperty('name')
		expect(game.name).toBe(dto.name)
		expect(game.voting_type).toBe(mockReturn.voting_type)
		expect(game.owner_id).toBe(mockReturn.owner_id)
		expect(game.is_deleted).toBe(false)
		expect(game.deleted_at).toBeNull()
		expect(game.created_at).not.toBe(mockReturn.updated_at)
	})
})
