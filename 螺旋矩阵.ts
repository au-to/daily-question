// https://leetcode.cn/problems/spiral-matrix/description/?envType=study-plan-v2&envId=top-100-liked


// 时间复杂度：O(mn)
// 空间复杂度：存储结果数组的空间复杂度为 O(mn)，算法本身的空间复杂度为 O(1)

function spiralOrder(matrix: number[][]): number[] {
  const res: number[] = [];
  if (matrix.length === 0 || matrix[0].length === 0) return res;

  let left = 0;
  let right = matrix[0].length - 1;
  let top = 0;
  let bottom = matrix.length - 1;

  while (left <= right && top <= bottom) {
    // 从左往右遍历
    for (let j = left; j <= right; j++) {
      res.push(matrix[top][j]);
    }
    top++;

    // 从上往下遍历
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    right--;

    // 从右往左遍历
    if (top <= bottom) {
      for (let j = right; j >= left; j--) {
        res.push(matrix[bottom][j]);
      }
      bottom--;
    }

    // 从下往上遍历
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        res.push(matrix[i][left]);
      }
      left++;
    }
  }

  return res;
}
