import { createIterator } from './basic.iterator';

describe('iterator test', () => {
  it('is next value correct', () => {
    const letters = ['a', 'b', 'c'];
    const iterator = createIterator(letters);
    for (let i = 0; i < letters.length; i++) {
      expect(iterator.next()).toEqual({ value: letters[i], done: false });
    }
    expect(iterator.next()).toEqual({ value: undefined, done: true });
  });
});
