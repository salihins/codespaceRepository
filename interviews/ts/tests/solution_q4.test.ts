import { describe, it, expect } from 'vitest';
import { findLongestIncreasingStreak } from '../src/solution_q4';

describe('findLongestIncreasingStreak', () => {
    it('should return null for empty array', () => {
        const result = findLongestIncreasingStreak([]);
        expect(result).toBeNull();
    });

    it('should return null for single element', () => {
        const result = findLongestIncreasingStreak([10]);
        expect(result).toBeNull();
    });

    it('should find streak in the middle (example case)', () => {
        const result = findLongestIncreasingStreak([3, 4, 2, 5, 6, 7]);
        expect(result).toEqual({ length: 4, start: 2, end: 5 });
    });

    it('should return entire array if strictly increasing', () => {
        const result = findLongestIncreasingStreak([1, 2, 3, 4, 5]);
        expect(result).toEqual({ length: 5, start: 0, end: 4 });
    });

    it('should return length of 1 for strictly decreasing array', () => {
        const result = findLongestIncreasingStreak([5, 4, 3, 2, 1]);
        // Expecting the first element (or any single element) as the longest streak
        // My implementation returns index 0 for the first found max length
        expect(result).toEqual({ length: 1, start: 0, end: 0 });
    });

    it('should handle equal elements as breaking the streak', () => {
        // "Increasing" usually means strictly increasing.
        // If [1, 2, 2, 3], streak is [1, 2] (len 2) or [2, 3] (len 2)?
        // 2 is not > 2, so it breaks. 
        const result = findLongestIncreasingStreak([1, 2, 2, 3]);
        // Subsequences: [1,2], [2], [2,3] -> max is 2.
        // Should return the first one [1, 2]
        expect(result).toEqual({ length: 2, start: 0, end: 1 });
    });

    it('should return the first streak if multiple have same max length', () => {
        const result = findLongestIncreasingStreak([1, 2, 4, 5]); // [1,2] (len 2), [4,5] (len 2)
        // Wait, [1,2,4,5] is strictly increasing length 4.
        // Let's use [1, 2, 0, 1]
        const result2 = findLongestIncreasingStreak([1, 2, 0, 1]);
        expect(result2).toEqual({ length: 2, start: 0, end: 1 });
    });

    it('should handle streak at the end', () => {
        const result = findLongestIncreasingStreak([5, 1, 2, 3]);
        expect(result).toEqual({ length: 3, start: 1, end: 3 });
    });
    
    it('should handle negative numbers', () => {
        const result = findLongestIncreasingStreak([-5, -2, -1, -3]); // [-5, -2, -1] is inc
        expect(result).toEqual({ length: 3, start: 0, end: 2 });
    });
});
