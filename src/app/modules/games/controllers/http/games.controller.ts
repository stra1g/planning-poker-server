import {
	Request, Response 
} from 'express'
import {
	container 
} from 'tsyringe'
import {
	CreateGameService 
} from '../../services/create-game/create-game.service'
import {
	EditGameService 
} from '../../services/edit-game/edit-game.service'

export class GamesController {
	public async store(request: Request, response: Response): Promise<Response> {
		const { game } = await container.resolve(CreateGameService).run(request.body)

		return response.status(201).json(game)
	}

	public async editById(request: Request, response: Response): Promise<Response> {
		const { id } = request.params
		const { game } = await container.resolve(EditGameService).run({
			game_id: id, ...request.body 
		})

		return response.status(201).json(game)
	}
}
