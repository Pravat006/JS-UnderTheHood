// Given an array of strings strs, group the anagrams together. You can return the answer in any order.



// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
    const map = {}
    for (let word of strs) {
        // generate signature key for the word
        const key = word.split('').sort().join('')
        // create  a bucket for the key if does not exist
        if (!map[key]) {
            map[key] = []
        }
        //  push the word for its corresponsing signature key bucket
        map[key].push(word)
    }
    // return the  grouped values

    return Object.values(map)
};