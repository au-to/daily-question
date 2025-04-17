// https://leetcode.cn/problems/letter-combinations-of-a-phone-number/description/?envType=study-plan-v2&envId=top-100-liked


/**
 * 时间复杂度O(3^n * 4^m),其中n是出现3个字母的数字数（如 2、3、4、5、6、8），m是出现4个字母的数字数（如 7、9
 * 空间复杂度O(n)
 */
function letterCombinations(digits: string): string[] {
  if (!digits.length) return []
  
  const map:Record<string, String> = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  }

  const res: string[] = []
  const path: string[] = []

  function backtrack(index: number) {
    if (index === digits.length) {
      res.push(path.join('')) // 将当前路径拼接成字符串
      return
    }

    const letters = map[digits[index]]
    for (let letter of letters) {
      path.push(letter) // 选一个字母
      backtrack(index + 1) // 递归去处理下一个数字
      path.pop() // 撤销选择，换一个字母
    }
  }

  backtrack(0)
  return res
}