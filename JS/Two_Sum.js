// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
//     Example:
// Given nums = [2, 7, 11, 15], target = 9,
//     Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var nums_array_length = nums.length
    var curr_num
    var next_num
    var res = []


    for (curr_num = 0; curr_num < nums_array_length; curr_num++) {
        var temp = target

        temp = temp - nums[curr_num]
        res[0] = curr_num
        for (next_num = curr_num + 1; next_num < nums_array_length; next_num++) {
            if (nums[next_num] === temp) {
                res[1] = next_num
                break
            }
        }

        if (res[1]) break
    }


    return res
}