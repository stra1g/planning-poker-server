import {
	Request, Response 
} from 'express'
import {
	container 
} from 'tsyringe'
import {
	CreatePlayerService 
} from '@modules/players/services/create-player/create-player.service'

export class PlayersController {
	public async store(request: Request, response: Response): Promise<Response> {
		const { player } = await container.resolve(CreatePlayerService).run(request.body)

		return response.status(201).json(player)
	}
}
