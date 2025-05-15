// 输入: "()"
// 输出: true

// 输入: "({[]})"
// 输出: true

// 输入: "(]"
// 输出: false

function isValid(s: string): boolean {
  const stack: string[] = []
  const map: Record<string, string> = {
    ')': '(',
    ']': '[',
    '}': '{'
  }

  for (let char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char)
    } else {
      if (stack.pop() !== map[char]) {
        return false
      }
    }
  }

  return stack.length === 0
}