import {
	IBaseRepository,
	MaybeSingleInstance,
	Params,
	SingleInstance
} from '@common/base/repository'
import {
	Model,
	PartialModelObject,
	ModelClass,
	Expression,
	PrimitiveValue,
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

	public async findById(entityId: string): Promise<MaybeSingleInstance<Entity>> {
		return this.orm.query().findById(entityId)
	}

	public async findOneBy(key: string, value: any): Promise<MaybeSingleInstance<Entity>> {
		return this.orm.query().findOne(key, value)
	}

}
