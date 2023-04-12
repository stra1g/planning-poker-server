import {
	IBaseRepository 
} from '@common/base/repository'
import {
	Model,
	PartialModelObject,
} from 'objection'

export class BaseRepository<Entity extends Model> implements IBaseRepository<Entity>{
	protected readonly orm: typeof Model
  
	constructor(protected model: typeof Model) {
		this.orm = model
	}

	public async store(payload: PartialModelObject<Entity>): Promise<Entity> {
		console.log(payload)
		const entity = await this.orm.query().insert(payload)
		return entity as any
	}

	public async editById(entityId: string, payload: PartialModelObject<Entity>) {
		return this.orm.query().updateAndFetchById(entityId, payload) as any
	}
}
