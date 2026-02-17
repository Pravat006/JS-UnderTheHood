// 128. Longest Consecutive Sequence

// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.



// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.



function longestConsecutive(nums: number[]): number {
    if (nums.length === 0) {
        return 0;
    }
    let max = 0
    const set = new Set(nums)
    for (let num of set) {
        if (!set.has(num - 1)) {
            let current = num;
            let length = 1

            while (set.has(current + 1)) {
                current++;
                length++
            }

            max = Math.max(max, length)
        }
    }

    return max
};