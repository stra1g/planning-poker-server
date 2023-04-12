import {
	ZodType,
	z 
} from 'zod'
import {
	ValidationException 
} from '../exceptions/ValidationException'

const validate = (schema: ZodType, payload: unknown) => {
	const validation = schema.safeParse(payload)

	if (!validation.success) {
		throw new ValidationException('Wrong informations provided', validation.error.issues)
	}

	return payload as z.infer<typeof schema>
}

export const http = {
	validate
}
