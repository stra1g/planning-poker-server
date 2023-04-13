import {
	logger 
} from '@helpers/logger.helper'
import {
	createServer 
} from 'http'
import {
	app 
} from '@infra/http/app' 
import {
	Server
} from 'socket.io'
import {
	onConnection 
} from '@infra/socket/connection'

const port = process.env.PORT || 3333

const httpServer = createServer(app)

const io = new Server(httpServer)

io.on('connection', (socket) => onConnection(socket, io))

httpServer.listen(port, () => {
	logger.info(`[HTTP Server] Running on port ${port}`)
})
