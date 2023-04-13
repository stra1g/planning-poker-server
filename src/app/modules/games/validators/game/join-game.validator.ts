import {
	z 
} from 'zod'

const joinGameSchema = z.object({
	game_code: z.string(),
	player_id: z.string().uuid(),
})

export { joinGameSchema }
