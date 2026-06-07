// 20 mins
interface StreakResult {
    length: number;
    start: number;
    end: number;
}

function resetCandidate(): StreakResult {
    return {
        length: 0,
        start: 0,
        end: 0
    };
}

export function findLongestIncreasingStreak(readings: number[]): StreakResult | null {
    let flag: boolean = false
    let result: StreakResult = {
        length: 1,
        start: 0,
        end: 0,
    };

    let resultCandidate: StreakResult = {
        length: 1,
        start: 0,
        end: 0,
    };

    if (readings.length < 2) return null;

    for (let i = 0; i < readings.length - 1; i++) {
        if (readings[i] < readings[i + 1] && !flag) {
            resultCandidate.start = i;
            flag = true;
        } else if (readings[i] >= readings[i + 1]) {
            if (flag) {
                resultCandidate.end = i;
                flag = false;
                resultCandidate.length = resultCandidate.end - resultCandidate.start + 1;

                result = resultCandidate.length > result.length ? resultCandidate : result;
            }
            resultCandidate = resetCandidate();
        }
    }

    if (flag) {
        resultCandidate.end = readings.length - 1;
        resultCandidate.length = resultCandidate.end - resultCandidate.start + 1;
    }

    return resultCandidate.length > result.length ? resultCandidate : result;
}

// Optimal according to chatgpt.

type LongestIncreasingSegment = {
    length: number;
    startIndex: number; // inclusive
    endIndex: number;   // inclusive
};

/**
 * Longest strictly-increasing contiguous segment.
 * - O(n) time, O(1) extra space
 * - Ties: returns the earliest segment (first found)
 *
 * Examples:
 * readings: [3, 4, 2, 5, 6, 7]
 * result: { length: 3, startIndex: 3, endIndex: 5 }  // [5,6,7]
 */
export function longestIncreasingContiguous(readings: number[]): LongestIncreasingSegment {
    const n = readings.length;
    if (n === 0) return { length: 0, startIndex: -1, endIndex: -1 };
    if (n === 1) return { length: 1, startIndex: 0, endIndex: 0 };

    let bestStart = 0;
    let bestEnd = 0;

    let curStart = 0;

    for (let i = 1; i < n; i++) {
        if (readings[i] <= readings[i - 1]) {
            curStart = i; // reset streak
            continue;
        }

        // streak continues: [curStart .. i]
        if (i - curStart > bestEnd - bestStart) {
            bestStart = curStart;
            bestEnd = i;
        }
    }

    return {
        length: bestEnd - bestStart + 1,
        startIndex: bestStart,
        endIndex: bestEnd,
    };
}
