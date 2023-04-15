import {
	IGamesRepository 
} from '@modules/games/interfaces/game.interface'
import {
	randomBytes, randomUUID 
} from 'crypto'
import {
	PickCardService 
} from './pick-card.service'

type MockGamesRepository = IGamesRepository & { findOneBy: jest.Mock, findOnePlayer: jest.Mock, attachPlayerCard: jest.Mock }

describe('Pick card', () => {
	let service: PickCardService
	let gamesRepository: MockGamesRepository
  
	beforeEach(() => {
		gamesRepository = {
			findOneBy: jest.fn(),
			findOnePlayer: jest.fn(),
			attachPlayerCard: jest.fn()
		} as unknown as MockGamesRepository
		service = new PickCardService(gamesRepository)
	})

	it('should not be able to pick a card if game does not exists', async () => {
		const dto = {
			game_code: randomBytes(20).toString('hex'),
			player_id: randomUUID(),
			card_value: '8',
		}

		gamesRepository.findOneBy.mockResolvedValue(undefined)

		const response = await service.run(dto)

		expect(response).toBeNull()
	})

	it('should not be able to pick a card if player is not in game', async () => {
		const dto = {
			game_code: randomBytes(20).toString('hex'),
			player_id: randomUUID(),
			card_value: '8',
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
		gamesRepository.findOnePlayer.mockResolvedValue(undefined)

		const response = await service.run(dto)

		expect(response).toBeNull()
	})

	it('should be able to pick a card', async () => {
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

		const playerMockReturn = {
			id: randomUUID(),
			name: 'Player',
			is_deleted: false,
			deleted_at: null,
			created_at: new Date(),
			updated_at: new Date(),
		}

		gamesRepository.findOneBy.mockResolvedValue(gameMockReturn)
		gamesRepository.findOnePlayer.mockResolvedValue(playerMockReturn)
		gamesRepository.attachPlayerCard.mockResolvedValue(undefined)

		const response = await service.run(dto)

		expect(response).toBeUndefined()
	})
})
