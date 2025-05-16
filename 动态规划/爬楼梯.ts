// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

// 每次你可以爬 1 阶 或 2 阶。

// 问：你有多少种不同的方法可以爬到楼顶？


function climbStairs(n: number): number {
  if (n <= 2) {
    return n
  }

  let a = 1
  let b = 2

  for (let i = 3; i < n; i++) {
    const temp = a + b // 当前台阶的走法
    a = b
    b = temp
  }

  return b
}