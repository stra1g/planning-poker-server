import {
	z 
} from 'zod'

const removeCardSchema = z.object({
	game_code: z.string(),
	player_id: z.string().uuid(),
})

export { removeCardSchema }
