function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const obj1 = { name: 'John' };
const obj2 = { age: 30 };

export const mergedObj = merge(obj1, obj2);

