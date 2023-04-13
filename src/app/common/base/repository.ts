import {
	MaybeSingleQueryBuilder,
	PartialModelObject, QueryBuilderType, SingleQueryBuilder
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

export type SingleInstance<T extends BaseEntity> = SingleQueryBuilder<QueryBuilderType<T>>
export type MaybeSingleInstance<T extends BaseEntity> = MaybeSingleQueryBuilder<QueryBuilderType<T>>

export abstract class IBaseRepository<Entity extends BaseEntity> {
  abstract store(payload: PartialModelObject<Entity>): Promise<SingleInstance<Entity>>
  abstract editById(entityId: string, payload: PartialModelObject<Entity>): Promise<SingleInstance<Entity>>
  abstract findById(entityId: string): Promise<MaybeSingleInstance<Entity>>
  abstract findOneBy(key: string, value: any): Promise<MaybeSingleInstance<Entity>>
}
