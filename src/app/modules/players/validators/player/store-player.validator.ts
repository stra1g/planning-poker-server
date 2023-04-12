import {
	z 
} from 'zod'

export class StorePlayerValidator {
	public schema = z.object({
		name: z.string(),
	})

	public validate(data: unknown) {
		return this.schema.safeParse(data)
	}
}

const schema = z.object({
	name: z.string(),
})

export { schema }
