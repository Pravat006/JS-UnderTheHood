// 76. Minimum Window Substring

// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.



/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    if (t.length > s.length || !t.length) return "";
    const tmap = new Map()
    for (char of t) {
        tmap.set(char, (tmap.get(char) || 0) + 1)
    }

    // how many character requirements are satisfied
    let weHave = 0;
    // total unique character that must satisfied
    const required = tmap.size
    // current window frequency map
    const currWindow = new Map()

    let lidx = 0
    // minimum window found
    let minLen = Infinity;
    let res = [-1, -1]

    for (let ridx = 0; ridx < s.length; ridx++) {
        const char = s[ridx]

        currWindow.set(char, (currWindow.get(char) || 0) + 1)

        //  if character satisfied the needed frequency 
        if (tmap.has(char) && currWindow.get(char) === tmap.get(char)) {
            weHave++;
        }

        // shrink the valid window
        while (weHave === required) {
            //  update the minimum window if current is smaller
            if (ridx - lidx + 1 < minLen) {
                minLen = ridx - lidx + 1;
                res = [lidx, ridx]
            }

            //  remove leftmost character from the window
            const leftChar = s[lidx]
            currWindow.set(leftChar, currWindow.get(leftChar) - 1)

            // if removing breaks the requirement, then the window is invalid
            if (tmap.get(leftChar) && currWindow.get(leftChar) < tmap.get(leftChar)) {
                weHave--
            }

            // shrink the window
            lidx++
        }
    }

    const [start, end] = res
    return minLen === Infinity ? "" : s.slice(start, end + 1)
};

const s = "ADOBECODEBANC";
const t = "ABC";
console.log(minWindow(s, t))

