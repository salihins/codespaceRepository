import { describe, it, expect } from 'vitest';
import { groupAnagrams } from '../src/q3_solution';

describe('groupAnagrams', () => {
    it('should group anagrams together', () => {
        const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
        const result = groupAnagrams(input);
        
        // Helper to sort results for comparison since order doesn't matter
        const sortResult = (res: string[][]) => {
            return res.map(group => group.sort()).sort((a, b) => a[0].localeCompare(b[0]));
        };

        const expected = [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]];
        
        expect(sortResult(result)).toEqual(sortResult(expected));
    });

    it('should return empty array for empty input', () => {
        expect(groupAnagrams([])).toEqual([]);
    });

    it('should handle single word', () => {
        expect(groupAnagrams(["hello"])).toEqual([["hello"]]);
    });

    it('should handle empty string', () => {
        expect(groupAnagrams([""])).toEqual([[""]]);
    });
    
     it('should handle no anagrams', () => {
        const input = ["rat", "cab", "dad"];
        const result = groupAnagrams(input);
        const expected = [["rat"], ["cab"], ["dad"]];
        
         // Helper to sort results for comparison
        const sortResult = (res: string[][]) => {
            return res.map(group => group.sort()).sort((a, b) => a[0].localeCompare(b[0]));
        };
        
        expect(sortResult(result)).toEqual(sortResult(expected));
    });
});
