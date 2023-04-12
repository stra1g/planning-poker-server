import {
	PartialModelObject
} from 'objection'
import {
	BaseEntity 
} from './entity'

export type Params<T> = {
  where?: Partial<T>
  where_between?: {
    column: keyof T;
    values: [T[keyof T], T[keyof T]];
  }
}

export abstract class IBaseRepository<Entity extends BaseEntity> {
  abstract store(payload: PartialModelObject<Entity>): Promise<Entity>;
  abstract editById(entityId: string, payload: PartialModelObject<Entity>): Promise<Entity>;
}
