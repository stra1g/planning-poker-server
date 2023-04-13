import {
	z 
} from 'zod'

const editGameByIdSchema = z.object({
	name: z.string().optional(),
})

export { editGameByIdSchema }
