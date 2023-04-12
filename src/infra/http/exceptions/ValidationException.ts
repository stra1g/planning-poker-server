export class ValidationException {
	public readonly message: string

	public readonly statusCode: number

	public readonly errors: unknown

	constructor(message: string, errors: unknown, statusCode = 422) {
		this.message = message
		this.statusCode = statusCode
		this.errors = errors
	}
}
