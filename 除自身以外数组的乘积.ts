// https://leetcode.cn/problems/product-of-array-except-self/description/?envType=study-plan-v2&envId=top-100-liked


// 暴力破解： O(n^2)
function productExceptSelf(nums: number[]): number[] {
  const res: number[] = new Array(nums.length).fill(1)
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue
      res[i] *= nums[j]
    }
  }
  return res
}

// 前缀积 * 后缀积 = 除自身以外数组的乘积 O(n)
function productExceptSelf1(nums: number[]): number[] {
  const n = nums.length
  const res: number[] = new Array(n).fill(1)

  // 前缀积
  let prefix = 1
  for (let i = 0; i < n; i++) {
    res[i] = prefix // 保存前缀积
    prefix *= nums[i] // 更新前缀积
  }

  // 后缀积
  let suffix = 1
  for (let i = n - 1; i >= 0; i--) {
    res[i] *= suffix // 前缀积 * 后缀积
    suffix *= nums[i] // 更新后缀积
  }

  return res
}