//10 mins 
export function findFirstUniqueChar(log: string): string | null {
    if (!log) return null;

    const charMap = new Map<string, number>();
    const lowerLog = log.toLowerCase();
    let count = 0;
    
    for (const char of lowerLog) {
        if (/[a-z]/.test(char)) {
            count = charMap.get(char) || 0;
            charMap.set(char, count + 1);
        }
    }

    for (const char of lowerLog) {
        if (/[a-z]/.test(char) && charMap.get(char) === 1) {
            return char;
        }
    }

    return null;
}

//According to chatgpt.
/**
 * Returns the first non-repeating letter in the string.
 * - Case-insensitive
 * - Ignores non-letters (A–Z only)
 * - O(n) time, O(1) space (fixed 26 counts + indices)
 *
 * Example: "aA-bcB!" -> "c"
 */
export function firstNonRepeatingLetter(input: string): string | null {
    const counts = new Array<number>(26).fill(0);

    // 1) Count letters (case-insensitive)
    for (let i = 0; i < input.length; i++) {
        const idx = letterIndex(input.charCodeAt(i));
        if (idx !== -1) counts[idx]++;
    }

    // 2) Find first letter with count 1 (in original order)
    for (let i = 0; i < input.length; i++) {
        const idx = letterIndex(input.charCodeAt(i));
        if (idx !== -1 && counts[idx] === 1) return String.fromCharCode(97 + idx); // lowercase
    }

    return null;
}

function letterIndex(code: number): number {
    // A-Z
    if (code >= 65 && code <= 90) return code - 65;
    // a-z
    if (code >= 97 && code <= 122) return code - 97;
    return -1;
}