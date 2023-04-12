enum LogLevel {
  INFO = '\x1b[32m',
  WARN = '\x1b[33m',
  ERROR = '\x1b[31m',
}

export const logger = {
	info: (message: string) => console.log(`${LogLevel.INFO}${message}\x1b[0m`),
	warn: (message: string) => console.log(`${LogLevel.WARN}${message}\x1b[0m`),
	error: (message: string) => console.log(`${LogLevel.ERROR}${message}\x1b[0m`)
}
