import {
	z 
} from 'zod'

const storePlayerSchema = z.object({
	name: z.string(),
})

export { storePlayerSchema }
