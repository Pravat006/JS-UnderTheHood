// Given two strings s and t, return true if t is an anagram of s, and false otherwise.



// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function (s, t) {
//     const newS = s.split('').sort().join('')
//     const newT = t.split('').sort().join('')
//     if (newS === newT) return true
//     return false
// };

// the time complexity of this solution is O(n log n) because of the sorting operation, where n is the length of the input strings. The space complexity is O(n) due to the additional space used for the sorted strings.


const isAnagram = function (s, t) {
    if (s.length !== t.length) return false

    const count = {}
    for (let char of s) {
        count[char] = (count[char] || 0) + 1
    }
    for (let char of t) {
        if (!count[char]) return false
        count[char]--
    }
    return true
}



const s = "anagram", t = "nagaras"
console.log(isAnagram(s, t))