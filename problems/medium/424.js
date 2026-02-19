// 424. Longest Repeating Character Replacement

// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.



// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.


/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    const freq = new Array(26).fill(0)
    let maxLen = 0;
    let maxFreq = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        const idx = s.charCodeAt(right) - 65;
        freq[idx]++


        maxFreq = Math.max(maxFreq, freq[idx])

        while ((right - left + 1) - maxFreq > k) {
            const lIdx = s.charCodeAt(left) - 65;
            freq[lIdx]--;
            left++
        }
        maxLen = Math.max(maxLen, right - left + 1)
    }
    return maxLen
};


const s = "abab";
console.log(characterReplacement(s, 2))