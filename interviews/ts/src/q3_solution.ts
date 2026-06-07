export function groupAnagrams(strs: string[]): string[][] {
    if (strs.length === 0) return [];

    const map = new Map<string, string[]>();

    for (const s of strs) {
        // Sort the string to use as key
        const key = s.split('').sort().join('');
        
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key)!.push(s);
    }

    return Array.from(map.values());
}
