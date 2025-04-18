// lib/memory.ts

type MemoryStore = Record<string, string | number | boolean | object>;

let shortTermMemory: MemoryStore = {};

export const Memory = {
  get(key: string) {
    return shortTermMemory[key];
  },
  set(key: string, value: any) {
    shortTermMemory[key] = value;
  },
  reset() {
    shortTermMemory = {};
  },
  list() {
    return shortTermMemory;
  },
};
