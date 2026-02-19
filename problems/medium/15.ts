// 15. 3Sum
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.



// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

function threeSum(nums: number[]): number[][] {
    // sort the array
    nums.sort((a, b) => a - b)

    const res = []
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue

        let lIdx = i + 1
        let rIdx = nums.length - 1
        while (lIdx < rIdx) {
            const sum = nums[i] + nums[lIdx] + nums[rIdx]

            if (sum === 0) {
                res.push([nums[i], nums[lIdx], nums[rIdx]])

                // check for duplicate left index value
                while (lIdx < rIdx && nums[lIdx] === nums[lIdx + 1]) lIdx++ // sskip the duplicate value increase by 1 index
                // check for duplicate right index value
                while (lIdx < rIdx && nums[rIdx] === nums[rIdx - 1]) rIdx-- // skip the duplicate value decrease by 1 index
                lIdx++;
                rIdx--;
            } else if (sum < 0) {
                lIdx++
            } else {
                rIdx--
            }
        }
    }
    return res
};


const nums = [-1, 0, 1, 2, -1, -4]
console.log(threeSum([0, 0, 0]))