import {
	Server,
	Socket 
} from 'socket.io'
import {
	socketValidator 
} from '@infra/socket/validators/socket-validator'
import {
	joinGameSchema 
} from '@modules/games/validators/game/join-game.validator'
import {
	container 
} from 'tsyringe'
import {
	JoinGameService 
} from '@modules/games/services/join-game/join-game.service'

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
}
