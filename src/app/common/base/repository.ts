import {
	DeepPartial 
} from 'typeorm'

export type Params<T> = {
  where?: DeepPartial<T>
  where_between?: {
    column: keyof T;
    values: [T[keyof T], T[keyof T]];
  }
}

export abstract class IBaseRepository<T> {
  abstract store(payload: DeepPartial<T>): Promise<T>;
}
