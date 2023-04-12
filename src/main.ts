import {
	logger 
} from '@helpers/logger.helper'
import {
	app 
} from '@infra/http/app' 

const port = process.env.PORT || 3333

app.listen(port, () => {
	logger.info(`[HTTP Server] Running on port ${port}`)
})
