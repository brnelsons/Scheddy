import {PersistenceService} from "./persistence";

/**
 * CRUD storage service.
 */
export class CrudStorage<T> {
  private persistence: PersistenceService<T[]>;

  constructor(storePath: string,
              storeName: string) {
    this.persistence = new PersistenceService<T[]>(storePath, storeName);
  }

  public createIfNotExists(): void {
    if (!this.persistence.exists()) {
      this.persistence.writeSync([]);
    }
  }

  public async getAll(): Promise<T[]> {
    return this.persistence.read();
  }

  public async add(value: T): Promise<boolean> {
    const values = await this.getAll();
    values.push(value);
    return this.save(values);
  }

  public async update(value: T, comparator: (me, other) => boolean): Promise<boolean> {
    const values = await this.getAll();
    for (const val of values) {
      if (comparator(value, val)) {
        this.remove(val);
      }
    }
    return this.add(value);
  }

  async save(values: T[]): Promise<boolean> {
    return this.persistence.write(values);
  }

  async remove(value: T): Promise<boolean> {
    let values = await this.getAll();
    values = values.filter(v => v !== value);
    return this.save(values);
  }

  async removeAll(): Promise<boolean> {
    return this.save([]);
  }
}
