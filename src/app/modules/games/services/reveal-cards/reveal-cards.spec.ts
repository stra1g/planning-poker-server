import {
	IGamesRepository 
} from '@modules/games/interfaces/game.interface'
import {
	randomBytes, randomUUID 
} from 'crypto'
import {
	RevealCardsService 
} from './reveal-cards.service'

type MockGamesRepository = IGamesRepository & { findOneBy: jest.Mock, findOnePlayer: jest.Mock, getPickedCards: jest.Mock }

describe('Reveal cards', () => {
	let service: RevealCardsService
	let gamesRepository: MockGamesRepository

	beforeEach(() => {
		gamesRepository = {
			findOneBy: jest.fn(),
			findOnePlayer: jest.fn(),
			getPickedCards: jest.fn()
		} as unknown as MockGamesRepository
		service = new RevealCardsService(gamesRepository)
	})

	it('should not be able to reveal cards if game does not exists', async () => {
		const dto = {
			game_code: randomBytes(20).toString('hex'),
			player_id: randomUUID(),
		}

		gamesRepository.findOneBy.mockResolvedValue(undefined)
    
		const response = await service.run(dto)

		expect(response).toBeNull()
	})

	it('should not be able to reveal cards if player is not in game', async () => {
		const dto = {
			game_code: randomBytes(20).toString('hex'),
			player_id: randomUUID(),
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

	it('should be able to reveal cards', async () => {
		const dto = {
			game_code: randomBytes(20).toString('hex'),
			player_id: randomUUID(),
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

		const playerCards = [
			{
				id: randomUUID(),
				player_id: randomUUID(),
				game_id: gameMockReturn.id,
				card_value: '100',
				is_deleted: false,
				deleted_at: null,
				created_at: new Date(),
				updated_at: new Date(),
			}, 
			{
				id: randomUUID(),
				player_id: playerMockReturn.id,
				game_id: gameMockReturn.id,
				card_value: '50',
				is_deleted: false,
				deleted_at: null,
				created_at: new Date(),
				updated_at: new Date(),
			}
		]

		gamesRepository.findOneBy.mockResolvedValue(gameMockReturn)
		gamesRepository.findOnePlayer.mockResolvedValue(playerMockReturn)
		gamesRepository.getPickedCards.mockResolvedValue(playerCards)
    
		const response = await service.run(dto)

		expect(response).toBeTruthy()
		if (response) {
			expect(response).toHaveProperty('picked_cards')
			expect(response.picked_cards).toBeInstanceOf(Array)
			expect(response.picked_cards).toHaveLength(2)
			expect(response.picked_cards[0]).toHaveProperty('id')
			expect(response.picked_cards[0]).toHaveProperty('player_id')
			expect(response.picked_cards[0]).toHaveProperty('game_id')
			expect(response.picked_cards[0]).toHaveProperty('card_value')
			expect(typeof response.picked_cards[0].card_value).toBe('string')
		}
	})
})
