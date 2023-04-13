import {
	logger 
} from '@helpers/logger.helper'
import {
	ZodType
} from 'zod'

const validate = <T>(schema: ZodType<T>, payload: any): T | null => {
	const validation = schema.safeParse(payload)

	if (!validation.success) {
		logger.error(`[Socket Validator] ${validation.error.message}`)
		return null
	}

	return validation.data
}

export const socketValidator = {
	validate
}
