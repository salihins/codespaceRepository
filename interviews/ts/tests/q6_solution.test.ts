import { describe, it, expect } from 'vitest';
import { findPath } from '../src/q6_solution';

describe('findPath', () => {
    it('should return path for direct flight', () => {
        const flights = [[0, 1]];
        const result = findPath(2, flights, 0, 1);
        expect(result).toEqual([0, 1]);
    });

    it('should return path for indirect flight', () => {
        const flights = [[0, 2], [2, 1]];
        const result = findPath(3, flights, 0, 1);
        expect(result).toEqual([0, 2, 1]);
    });

    it('should return empty array if no path exists', () => {
        const flights = [[0, 2], [3, 1]];
        const result = findPath(4, flights, 0, 1);
        expect(result).toEqual([]);
    });

     it('should return start city if start equals end', () => {
        const flights = [[0, 1]];
        const result = findPath(2, flights, 0, 0);
        expect(result).toEqual([0]);
    });

    it('should handle cycles correctly (valid path exists)', () => {
        // 0 -> 2 -> 1, but also 2 -> 0
        const flights = [[0, 2], [2, 1], [2, 0]];
        const result = findPath(3, flights, 0, 1);
        expect(result).toEqual([0, 2, 1]);
    });
    
    it('should return empty array for disconnected graph with cycle', () => {
         const flights = [[0, 2], [2, 0], [3, 1]];
         const result = findPath(4, flights, 0, 1);
         expect(result).toEqual([]);
    });

    it('should solve the example case', () => {
        const n = 6;
        const flights = [[0,1], [1,2], [2,4], [0,3], [3,4], [4,5]];
        const start = 0;
        const end = 5;
        const result = findPath(n, flights, start, end);
        
        // Since multiple paths might exist (e.g., 0-1-2-4-5 or 0-3-4-5), we verify the path validity
        // Logic:
        // 1. Path must start with start and end with end
        // 2. Each step must be a valid edge
        
        expect(result.length).toBeGreaterThan(0);
        expect(result[0]).toBe(start);
        expect(result[result.length - 1]).toBe(end);
        
        // Verify valid edges
        /*
        for (let i = 0; i < result.length - 1; i++) {
            const u = result[i];
            const v = result[i+1];
            const edgeExists = flights.some(f => f[0] === u && f[1] === v);
            expect(edgeExists).toBe(true);
        }
        */
       // Actually, usually tests expect a specific output or mock the graph traversal order. 
       // But assuming BFS/DFS, let's just accept either valid path if the implementation is not fixed.
       // However, for this test update request, likely the user wants to see if their implementation works.
       // Let's assume standard DFS or BFS. The example output says [0, 3, 4, 5] is OK.
       
       const validPaths = [
           [0, 1, 2, 4, 5],
           [0, 3, 4, 5]
       ];
       
       // Check if the result is one of the valid paths
       const isValid = validPaths.some(p => JSON.stringify(p) === JSON.stringify(result));
       expect(isValid).toBeTruthy();
       
        for (let i = 0; i < result.length - 1; i++) {
            const u = result[i];
            const v = result[i+1];
            const edgeExists = flights.some(f => f[0] === u && f[1] === v);
            expect(edgeExists).toBeTruthy();
        }
    });
});
