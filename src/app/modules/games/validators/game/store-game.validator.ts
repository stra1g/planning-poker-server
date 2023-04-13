import {
	z 
} from 'zod'

const storeGameSchema = z.object({
	name: z.string(),
	voting_type: z.string(),
	owner_id: z.string().uuid()
})

export { storeGameSchema }
