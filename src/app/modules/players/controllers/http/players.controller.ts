import {
	Request, Response 
} from 'express'
import {
	container 
} from 'tsyringe'
import {
	CreatePlayerService 
} from '@modules/players/services/create-player/create-player.service'
import {
	schema
} from '@modules/players/validators/player/store-player.validator'
import {
	http 
} from '@infra/http/validators/validator'

export class PlayersController {
	public async store(request: Request, response: Response): Promise<Response> {
		const test = http.validate(schema, request.body)

		const { player } = await container.resolve(CreatePlayerService).run(test)

		return response.status(201).json(player)
	}
}
