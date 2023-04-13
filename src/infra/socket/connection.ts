import {
	gamesController 
} from '@modules/games/controllers/ws/games.controller'
import {
	Server,
	Socket 
} from 'socket.io'

export const onConnection = (socket: Socket, io: Server) => {
	console.log(`[Socket.io] User connected on socket ${socket.id}`)
	gamesController(socket, io)
}
