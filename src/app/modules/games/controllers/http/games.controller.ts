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
import {
	http 
} from '@infra/http/validators/validator'
import {
	editGameByIdSchema,
	storeGameSchema
} from '@modules/games/validators/game/'

export class GamesController {
	public async store(request: Request, response: Response): Promise<Response> {
		const dto = http.validate(storeGameSchema, request.body)

		const { game } = await container.resolve(CreateGameService).run(dto)

		return response.status(201).json(game)
	}

	public async editById(request: Request, response: Response): Promise<Response> {
		const { id } = request.params
		const dto = http.validate(editGameByIdSchema, request.body)

		const { game } = await container.resolve(EditGameService).run({
			game_id: id, ...dto
		})

		return response.status(200).json(game)
	}
}
