import {
	IGamesRepository 
} from '@modules/games/interfaces/game.interface'
import {
	randomBytes, randomUUID 
} from 'crypto'
import {
	RemoveCardService 
} from './remove-card.service'

type MockGamesRepository = IGamesRepository & { findOneBy: jest.Mock, removePlayerCard: jest.Mock }

describe('Remove card', () => {
	let service: RemoveCardService
	let gamesRepository: MockGamesRepository
  
	beforeEach(() => {
		gamesRepository = {
			findOneBy: jest.fn(),
			removePlayerCard: jest.fn()
		} as unknown as MockGamesRepository
		service = new RemoveCardService(gamesRepository)
	})

	it('should not be able to remove a card if game does not exists', async () => {
		const dto = {
			game_code: randomBytes(20).toString('hex'),
			player_id: randomUUID(),
			card_value: '8',
		}

		gamesRepository.findOneBy.mockResolvedValue(undefined)

		const response = await service.run(dto)

		expect(response).toBeNull()
	})

	it('should be able to remove a card', async () => {
		const dto = {
			game_code: randomBytes(20).toString('hex'),
			player_id: randomUUID(),
			card_value: '8',
		}

		const gameMockReturn = {
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

		gamesRepository.findOneBy.mockResolvedValue(gameMockReturn)
		gamesRepository.removePlayerCard.mockResolvedValue(undefined)

		const response = await service.run(dto)

		expect(response).toBeUndefined()
	})
})
