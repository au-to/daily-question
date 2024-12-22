// https://leetcode.cn/problems/search-a-2d-matrix-ii/description/?envType=study-plan-v2&envId=top-100-liked


// 时间复杂度：O(m+n)
function searchMatrix(matrix: number[][], target: number): boolean {
  let i = 0;
  let j = matrix[0].length - 1;
  while (i < matrix.length && j >= 0) {
    if (matrix[i][j] > target) {
      j--;
    } else if (matrix[i][j] < target) {
      i++;
    } else {
      return true
    }
  }
  return false
}