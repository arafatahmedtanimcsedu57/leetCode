// Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.
// The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.
//     Note:
// Your returned answers(both index1 and index2) are not zero - based.
// You may assume that each input would have exactly one solution and you may not use the same element twice.
//     Example:
// Input: numbers = [2, 7, 11, 15], target = 9
// Output: [1, 2]
// Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var nums_array_length = nums.length
    var curr_num
    var next_num
    var res = []


    for (curr_num = 0; nums[curr_num] <= target; curr_num++) {
        var temp = target

        temp = temp - nums[curr_num]
        res[0] = curr_num + 1
        for (next_num = curr_num + 1; nums[next_num] <= temp; next_num++) {
            if (nums[next_num] === temp) {
                res[1] = next_num + 1
                break
            }
        }

        if (res[1]) break
    }


    return res
}