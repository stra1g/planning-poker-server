import {
	IPlayersRepository 
} from '@modules/players/interfaces/player.interface'
import {
	CreatePlayerService 
} from './create-player.service'
import {
	randomUUID 
} from 'crypto'

type MockPlayersRepository = IPlayersRepository  & { store: jest.Mock }

describe('Create player', () => {
	let service: CreatePlayerService
	let playersRepository: MockPlayersRepository

	beforeEach(() => {
		playersRepository = {
			store: jest.fn()
		} as unknown as MockPlayersRepository
		service = new CreatePlayerService(playersRepository)
	})

	it('should be able to create a new player', async () => {
		const name = 'Test player'
		const mockReturn = {
			id: randomUUID(),
			name,
			is_deleted: false,
			deleted_at: null,
			created_at: new Date(),
			updated_at: new Date(),
		}

		playersRepository.store.mockResolvedValue(mockReturn)

		const { player } = await service.run({
			name
		})

		expect(player).toHaveProperty('id')
		expect(player).toHaveProperty('name')
		expect(player.name).toEqual(name)
	})
})
