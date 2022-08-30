/**
 * @param {any[]} items
 * @returns
 */

export function createIterator(items) {
  let i = 0;
  return {
    next() {
      const done = items.length <= i;
      const value = !done ? items[i++] : undefined;
      return {
        value,
        done,
      };
    },
  };
}
