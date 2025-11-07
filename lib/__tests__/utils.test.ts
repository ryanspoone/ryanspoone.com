import { prettifyTitle, throttle } from '../utils';

describe('prettifyTitle', () => {
  it('should convert hyphenated string to title case', () => {
    expect(prettifyTitle('hello-world')).toBe('Hello World');
  });

  it('should handle multiple hyphens', () => {
    expect(prettifyTitle('this-is-a-test')).toBe('This Is A Test');
  });

  it('should return unchanged string without hyphens', () => {
    expect(prettifyTitle('HelloWorld')).toBe('HelloWorld');
  });

  it('should handle empty string', () => {
    expect(prettifyTitle('')).toBe('');
  });

  it('should handle single word with hyphen at start', () => {
    expect(prettifyTitle('-hello')).toBe(' Hello');
  });

  it('should handle single word with hyphen at end', () => {
    expect(prettifyTitle('hello-')).toBe('Hello ');
  });
});

describe('throttle', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should call function immediately on first call', () => {
    const mockFn = jest.fn();
    const throttled = throttle(mockFn, 1000);

    throttled();

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should throttle subsequent calls within delay', () => {
    const mockFn = jest.fn();
    const throttled = throttle(mockFn, 1000);

    throttled();
    throttled();
    throttled();

    expect(mockFn).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(1000);

    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it('should pass arguments to throttled function', () => {
    const mockFn = jest.fn();
    const throttled = throttle(mockFn, 1000);

    throttled('arg1', 'arg2');

    expect(mockFn).toHaveBeenCalledWith('arg1', 'arg2');
  });

  it('should allow calls after delay period', () => {
    const mockFn = jest.fn();
    const throttled = throttle(mockFn, 1000);

    throttled();
    jest.advanceTimersByTime(1000);
    throttled();

    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it('should cancel pending calls when cancel is called', () => {
    const mockFn = jest.fn();
    const throttled = throttle(mockFn, 1000);

    throttled();
    throttled();
    throttled.cancel();

    jest.advanceTimersByTime(1000);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
