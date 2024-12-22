// https://leetcode.cn/problems/rotate-image/description/?envType=study-plan-v2&envId=top-100-liked


// 方法：先转置，再翻转矩阵的每一行；时间复杂度O(n^2)，空间复杂度O(1)
function rotate(matrix: number[][]): void {
  const n = matrix.length;

  // 转置矩阵
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // 水平翻转矩阵的每一行
  for (let i = 0; i < n; i++) {
    let left = 0, right = n - 1;
    // 使用双指针遍历每一行，交换元素
    while (left < right) {
      [matrix[i][left], matrix[i][right]] = [matrix[i][right], matrix[i][left]];
      left++;
      right--;
    }
  }
}