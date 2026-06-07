import { expect, test, describe } from 'vitest';
import { count } from '../src/solution';

describe('count(price) TS', () => {
  test('handles zero', () => {
    expect(count("0")).toBe("zero");
  });

  test('handles basic numbers', () => {
    expect(count("7")).toBe("seven");
    expect(count("11")).toBe("eleven");
    expect(count("19")).toBe("nineteen");
    expect(count("20")).toBe("twenty");
    expect(count("21")).toBe("twenty one");
    expect(count("90")).toBe("ninety");
    expect(count("99")).toBe("ninety nine");
  });

  test('handles hundreds', () => {
    expect(count("100")).toBe("one hundred");
    expect(count("101")).toBe("one hundred one");
    expect(count("115")).toBe("one hundred fifteen");
    expect(count("200")).toBe("two hundred");
    expect(count("342")).toBe("three hundred forty two");
  });

  test('handles thousands', () => {
    expect(count("1000")).toBe("one thousand");
    expect(count("1001")).toBe("one thousand one");
    expect(count("1015")).toBe("one thousand fifteen");
    expect(count("1100")).toBe("one thousand one hundred");
    expect(count("2000")).toBe("two thousand");
    expect(count("2005")).toBe("two thousand five");
    expect(count("2345")).toBe("two thousand three hundred forty five");
  });

  test('handles millions', () => {
    expect(count("1000000")).toBe("one million");
    expect(count("1000005")).toBe("one million five");
    expect(count("1001000")).toBe("one million one thousand");
    expect(count("1234567")).toBe("one million two hundred thirty four thousand five hundred sixty seven");
    expect(count("2000000")).toBe("two million");
    expect(count("3000000")).toBe("three million");
  });

  test('handles large numbers', () => {
    expect(count("999999999")).toBe("nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine");
  });

  test('handles formatting logic (separators and whitespace)', () => {
    expect(count("   3000000   ")).toBe("three million");
    expect(count("3,000")).toBe("three thousand");
    expect(count("3,000,000")).toBe("three million");
    expect(count("3 000 000")).toBe("three million");
    expect(count("3_000_000")).toBe("three million");
    expect(count("1_000_005")).toBe("one million five");
  });

  test('throws on invalid input', () => {
    expect(() => count("")).toThrow();
    expect(() => count("   ")).toThrow();
    expect(() => count("-5")).toThrow();
    expect(() => count("abc")).toThrow();
  });
});
