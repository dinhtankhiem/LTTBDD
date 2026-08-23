export interface Repository<T> {
  add(item: T): void;
  get(index: number): T | undefined;
  getAll(): T[];
}

export class MemoryRepository<T> implements Repository<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  get(index: number): T | undefined {
    return this.items[index];
  }

  getAll(): T[] {
    return this.items;
  }
}