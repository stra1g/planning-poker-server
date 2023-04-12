import {
	IBaseRepository,
	SingleInstance
} from '@common/base/repository'
import {
	Model,
	PartialModelObject,
	ModelClass,
} from 'objection'

export class BaseRepository<Entity extends Model> implements IBaseRepository<Entity>{
	constructor(protected orm: ModelClass<Entity>) {}

	public async store(payload: PartialModelObject<Entity>): Promise<SingleInstance<Entity>> {
		const entity = await this.orm.query().insert(payload)
		return entity
	}

	public async editById(entityId: string, payload: PartialModelObject<Entity>): Promise<SingleInstance<Entity>> {
		return this.orm.query().updateAndFetchById(entityId, payload)
	}
}
