import {
	IBaseRepository
} from '@common/base/repository'
import {
	DeepPartial,
	Repository
} from 'typeorm'

export abstract class BaseRepository<T> extends Repository<T> implements IBaseRepository<T>{
	public async store(payload: DeepPartial<T>): Promise<T> {
		const entity = this.create(payload)

		return this.save(entity)
	}
}
