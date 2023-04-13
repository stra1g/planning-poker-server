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
	storePlayerSchema
} from '@modules/players/validators/player'
import {
	http 
} from '@infra/http/validators/validator'

export class PlayersController {
	public async store(request: Request, response: Response): Promise<Response> {
		const dto = http.validate(storePlayerSchema, request.body)

		const { player } = await container.resolve(CreatePlayerService).run(dto)

		return response.status(201).json(player)
	}
}
