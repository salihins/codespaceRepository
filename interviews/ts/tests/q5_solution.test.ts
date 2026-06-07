import { describe, it, expect } from 'vitest';
import { findFirstUniqueChar } from '../src/q5_solution';

describe('findFirstUniqueChar', () => {
    it('should return null for empty string', () => {
        expect(findFirstUniqueChar('')).toBeNull();
    });

    it('should return null if no unique characters exist', () => {
        expect(findFirstUniqueChar('aabbcc')).toBeNull();
    });

    it('should return the first unique character (case insensitive)', () => {
        expect(findFirstUniqueChar('aA-bcB!')).toBe('c');
    });

    it('should ignore non-letter characters', () => {
        expect(findFirstUniqueChar('123a456')).toBe('a');
    });

    it('should handle case insensitivity correctly', () => {
        expect(findFirstUniqueChar('zZ')).toBeNull();
        expect(findFirstUniqueChar('xXy')).toBe('y');
    });
    
    it('should return correct char when multiple unique chars exist', () => {
        expect(findFirstUniqueChar('abacabad')).toBe('c');
    });
});
