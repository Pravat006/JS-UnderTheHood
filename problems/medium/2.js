// 3. Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest substring without duplicate characters.

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

    let left = 0
    let longest = 0
    let set = new Set()

    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left])
            left++
        }
        set.add(s[right])
        longest = Math.max(longest, right - left + 1)
    }
    return longest
};