// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.



// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function (nums) {
    // store the frequency of each elements in the hash map
    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
        // first find if the value previusly exist in the map or not 
        if (map.get(nums[i])) return true
        map.set(nums[i], 1)
    }
    return false

};

const nums = [1, 2, 3, 4]

console.log(containsDuplicate(nums))
