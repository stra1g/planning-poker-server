export abstract class IBaseRepository<T> {
  abstract store(item: Partial<T>): Promise<T>;
  abstract findBy<K extends keyof T>(
    key: K,
    value: T[K],
    params?: {
      where?:
        | Partial<T>
        | {
            greater?: { column: keyof T; value: T[keyof T] };
            less?: { column: keyof T; value: T[keyof T] };
          };
      where_between?: {
        column: keyof T;
        values: [T[keyof T], T[keyof T]];
      };
    },
  ): Promise<T | null>;
  abstract edit(id: string, payload: Partial<T>): Promise<void>;
}
