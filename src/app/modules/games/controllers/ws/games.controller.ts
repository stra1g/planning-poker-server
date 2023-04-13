import {
	Server,
	Socket 
} from 'socket.io'
import {
	socketValidator 
} from '@infra/socket/validators/socket-validator'
import {
	joinGameSchema,
	pickCardSchema,
	removeCardSchema,
	revealCardsSchema
} from '@modules/games/validators/game'
import {
	container 
} from 'tsyringe'
import {
	JoinGameService 
} from '@modules/games/services/join-game/join-game.service'
import {
	PickCardService 
} from '@modules/games/services/pick-card/pick-card.service'
import {
	RemoveCardService 
} from '@modules/games/services/remove-card/remove-card.service'
import {
	RevealCardsService 
} from '@modules/games/services/reveal-cards/reveal-cards.service'

export const gamesController = (socket: Socket, io: Server) => {
	socket.on('join_game', async (...args) => {
		const dto = socketValidator.validate(joinGameSchema, args[0])

		if (!dto) return

		await container.resolve(JoinGameService).run(dto)

		const room = `game:${dto.game_code}}`
		socket.join(room)

		io.to(room).emit('new_player', {
			player_id: dto.player_id
		})
	})

	socket.on('pick_card', async (...args) => {
		const dto = socketValidator.validate(pickCardSchema, args[0])

		if (!dto) return

		await container.resolve(PickCardService).run(dto)

		const room = `game:${dto.game_code}}`

		io.to(room).emit('picked_card', {
			player_id: dto.player_id,
		})
	})

	socket.on('remove_card', async (...args) => {
		const dto = socketValidator.validate(removeCardSchema, args[0])

		if (!dto) return

		await container.resolve(RemoveCardService).run(dto)

		const room = `game:${dto.game_code}}`
    
		io.to(room).emit('removed_card', {
			player_id: dto.player_id
		})
	})

	socket.on('reveal_cards', async (...args) => {
		const dto = socketValidator.validate(revealCardsSchema, args[0])

		if (!dto) return null

		const pickedCards = await container.resolve(RevealCardsService).run(dto)

		if (!pickedCards) return null

		const room = `game:${dto.game_code}}`

		io.to(room).emit('revealed_cards', pickedCards)
	})
}
