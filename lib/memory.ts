// lib/memory.ts

type MemoryItem = {
  bot: string;
  message: string;
  response: string;
};

type MemoryStore = MemoryItem[];

let store: MemoryStore = [];

export const Memory = {
  get(key: string): string | number | boolean | object {
    return (store as any)[key];
  },

  set(key: string, value: any): void {
    (store as any)[key] = value;
  },

  add(item: MemoryItem): void {
    store.push(item);
  },

  list(): MemoryStore {
    return store;
  },

  reset(): void {
    store = [];
  }
};
