// https://leetcode.cn/problems/two-sum/description/?envType=study-plan-v2&envId=top-100-liked


// 方法1：暴力枚举 --- 时间复杂度：o(n^2)
let towSum1 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let sum = nums[i] + nums[j];
      if (sum === target) {
        return [i, j]
      }
    }
  }
}


// 方法2：哈希表 --- 时间复杂度：o(n)
let towSum2 = function (nums, target) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let temp = target - nums[i];
    if (map.has(temp)) {
      return [i, map.get(temp)]
    } else {
      map.set(nums[i], i)
    }
  }
}