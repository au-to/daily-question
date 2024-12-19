// https://leetcode.cn/problems/set-matrix-zeroes/description/?envType=study-plan-v2&envId=top-100-liked


// 使用第一行和第一列标记需要置为0的行和列
// 时间复杂度：O(m * n)
function setZeroes(matrix: number[][]): void {
  const m = matrix.length, n = matrix[0].length;

  let firstRowZero = false, firstColZero = false;

  // 检查第一列是否需要置为0
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) {
      firstColZero = true;
      break;
    }
  }
  
  // 检查第一行是否需要置为0
  for (let j = 0; j < n; j++) {
    if (matrix[0][j] === 0) {
      firstRowZero = true;
      break;
    }
  }

  // 检查其他元素是否需要置为0
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  // 根据第一列和第一行的标记将其他元素置为0
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  // 根据标记将第一行和第一列置为0
  if (firstRowZero) {
    for (let j = 0; j < n; j++) {
      matrix[0][j] = 0;
    }
  }

  if (firstColZero) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }
}