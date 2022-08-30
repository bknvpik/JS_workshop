import { cloneWithSpread, cloneWithAssign, cloneWithJSON } from './clone';

describe('cloneWithSpread', () => {
  it('makes a shallow copy', () => {
    const me = { name: 'Bartosz' };
    const parent = { name: 'Tomasz' };
    me.parent = parent;
    const you = cloneWithSpread(me);
    expect(you.parent).toBe(me.parent);
  });
  it('makes a deep copy', () => {
    const me = { name: 'Bartosz' };
    const parent = { name: 'Tomasz' };
    me.parent = parent;
    const you = cloneWithSpread(me);
    expect(you.parent).not.toBe(me.parent);
  });
});

describe('cloneWithJSON', () => {
  it('makes a shallow copy', () => {
    const me = { name: 'Bartosz' };
    const parent = { name: 'Tomasz' };
    me.parent = parent;
    const you = cloneWithSpread(me);
    expect(you.parent).toBe(me.parent);
  });
  it('makes a deep copy', () => {
    const me = { name: 'Bartosz' };
    const parent = { name: 'Tomasz' };
    me.parent = parent;
    const you = cloneWithSpread(me);
    expect(you.parent).not.toBe(me.parent);
  });
  it('does not copy an object with method', () => {
    const input = { prop: 'text', method: () => null };
    const output = cloneWithJSON(input);
    expect(input).not.toBe(output);
  });
});

describe('cloneWithAssign', () => {
  it('makes a shallow copy', () => {
    const me = { name: 'Bartosz' };
    const parent = { name: 'Tomasz' };
    me.parent = parent;
    const you = cloneWithSpread(me);
    expect(you.parent).toBe(me.parent);
  });
  it('makes a deep copy', () => {
    const me = { name: 'Bartosz' };
    const parent = { name: 'Tomasz' };
    me.parent = parent;
    const you = cloneWithSpread(me);
    expect(you.parent).not.toBe(me.parent);
  });
});
