import {
	Request, Response 
} from 'express'
import {
	container 
} from 'tsyringe'
import {
	CreateGameService 
} from '../../services/create-game/create-game.service'

export class GamesController {
	public async store(request: Request, response: Response): Promise<Response> {
		await container.resolve(CreateGameService).run(request.body)

		return response.status(201).send()
	}
}
