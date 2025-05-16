// 你有一个背包，最多能承重 W 重量。

// 有 N 个物品，每个物品都有：

// 一个重量 w[i]

// 一个价值 v[i]

// 你只能选或者不选每个物品（不能切割），怎么选才能装进最大价值？


function knapstack(weights: number[], values: number[], capacity: number): number {
  const n = weights.length
  const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0))

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= capacity; j++) {
      if (j < weights[i - 1]) {
        dp[i][j] = dp[i - 1][j]
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weights[i - 1]] + values[i - 1])
      }
    }
  }

  return dp[n][capacity]
}