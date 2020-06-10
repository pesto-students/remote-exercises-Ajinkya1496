import { negativeIndex } from './negativeIndex';

describe('negativeIndex', () => {
  test('behaves like an array', () => {
    const fixture = negativeIndex(['foo', 'bar', 'baz']);
    expect(fixture.length).toBe(3);
    expect(fixture.toString()).toBe('foo,bar,baz');
  });

  test('get values', () => {
    const fixture = negativeIndex(['foo', 'bar', 'baz']);
    expect(fixture[0]).toBe('foo');
    expect(fixture[1]).toBe('bar');
    expect(fixture[-1]).toBe('baz');
    expect(fixture[-2]).toBe('bar');
  });

  test('set values', () => {
    const fixture = negativeIndex(['foo', 'bar', 'baz']);
    fixture[0] = 0;
    expect(fixture[0]).toBe(0);
    fixture[1] = 1;
    expect(fixture[1]).toBe(1);
    fixture[-1] = -1;
    expect(fixture[-1]).toBe(-1);
    fixture[-2] = -2;
    expect(fixture[-2]).toBe(-2);

    /**
     * There was some problem with toEqual() comparison
     */
  });

  test('only accepts arrays', () => {
    expect(() => {
      negativeIndex({});
    }).toThrowError(TypeError, /Only arrays are supported/);
  });
});
