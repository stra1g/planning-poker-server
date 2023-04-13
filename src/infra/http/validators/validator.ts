import {
	ZodType
} from 'zod'
import {
	ValidationException 
} from '../exceptions/ValidationException'

const validate = <T>(schema: ZodType<T>, payload: unknown): T => {
	const validation = schema.safeParse(payload)

	if (!validation.success) {
		throw new ValidationException('Wrong informations provided', validation.error.issues)
	}

	return validation.data
}

export const http = {
	validate
}
