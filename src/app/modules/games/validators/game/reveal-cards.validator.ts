import {
	z 
} from 'zod'

const revealCardsSchema = z.object({
	game_code: z.string(),
	player_id: z.string().uuid(),
})

export { revealCardsSchema }
