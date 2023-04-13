import {
	z 
} from 'zod'

const pickCardSchema = z.object({
	game_code: z.string(),
	player_id: z.string().uuid(),
	card_value: z.string(),
})

export { pickCardSchema }
