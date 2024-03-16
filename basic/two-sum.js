// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, 
// and you may not use the same element twice.


const twoSum = (nums, target) => {
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === diff) {
                result = [i, j]
            }
        }

    }

    return result;
};

console.log(twoSum([2, 7, 11, 15], 9)) // [ 0, 1 ]
console.log(twoSum([3, 2, 4], 6)) // [1,2]
console.log(twoSum([3, 3], 6)) // [ 0, 1 ]

//Big-O = O(n^2)

console.log("-----------")

function twoSumOptimise(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
    }

    return [];
}

console.log(twoSumOptimise([2, 7, 11, 15], 9)) // [ 0, 1 ]
console.log(twoSumOptimise([3, 2, 4], 6)) // [1,2]
console.log(twoSumOptimise([3, 3], 6)) // [ 0, 1 ]