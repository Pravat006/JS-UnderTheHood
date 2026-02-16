// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.



// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2

// Output: [1,2]


const topKElements = function (nums, k) {
    const map = {}

    for (let num of nums) {
        // if the frequency does not exist in the map for the number then create with frequency 1
        if (!map[num]) {
            map[num] = 1
        }

        // if the key hit once again  then increment the frequency bt one 
        map[num] += 1
    }
    //  sort  the map by values in descesnding order
    const sorted = Object.keys(map).map(Number).sort((a, b) => map[b] - map[a])
    return sorted.slice(0, k)
}

const nums = [1, 1, 1, 2, 2, 3]
console.log(topKElements(nums, 2))

