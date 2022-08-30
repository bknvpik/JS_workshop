import { cloneWithSpread, cloneWithAssign, cloneWithJSON } from './clone';

describe('cloneWithSpread', () => {
  const me = { name: 'Piotr' };
  const parent = { name: 'John' };
  me.parent = parent;

  it('should make a shallow copy', () => {
    const you = cloneWithSpread(me);
    expect(you).not.toBe(me);
  });
  it('should not make a deep copy', () => {
    const you = cloneWithSpread(me);
    expect(you.parent).toBe(me.parent);
  });
  it('should copy methods', () => {
    const meWithMethods = { ...me, method: () => null };
    const youWithMethods = cloneWithSpread(meWithMethods);
    expect(youWithMethods.method).toBe(meWithMethods.method);
  });
});

describe('cloneWithJSON', () => {
  const me = { name: 'Piotr' };
  const parent = { name: 'John' };
  me.parent = parent;

  it('should make a shallow copy', () => {
    const you = cloneWithJSON(me);
    expect(you).not.toBe(me);
  });
  it('should make a deep copy', () => {
    const you = cloneWithJSON(me);
    expect(you.parent).not.toBe(me.parent);
  });
  it('should ignore methods', () => {
    const meWithMethods = { ...me, method: () => null };
    const youWithMethods = cloneWithJSON(meWithMethods);
    expect(youWithMethods.method).toBe(undefined);
  });
});

describe('cloneWithAssign', () => {
  const me = { name: 'Piotr' };
  const parent = { name: 'John' };
  me.parent = parent;

  it('should make a shallow copy', () => {
    const you = cloneWithAssign(me);
    expect(you).not.toBe(me);
  });
  it('should not make a deep copy', () => {
    const you = cloneWithAssign(me);
    expect(you.parent).toBe(me.parent);
  });
  it('should copy methods', () => {
    const meWithMethods = { ...me, method: () => null };
    const youWithMethods = cloneWithAssign(meWithMethods);
    expect(youWithMethods.method).toBe(meWithMethods.method);
  });
});
