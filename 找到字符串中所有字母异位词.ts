// https://leetcode.cn/problems/find-all-anagrams-in-a-string/description/?envType=study-plan-v2&envId=top-100-liked

/**
 *  滑动窗口：时间复杂度O(n)，空间复杂度O(n)
 */
  
 function findAnagrams(s: string, p: string): number[] {
  // 与字符串p互为异位词的条件：与p中所含的字母出现的次数相同

  // 先统计字符串p中字母出现的次数
  const aCharCodeAt:number = 'a'.charCodeAt(0);
  const res:number[] = []
  const pCount:number[] = new Array(26).fill(0);
  const sCount:number[] = new Array(26).fill(0);

  for(const str of p) {
      pCount[str.charCodeAt(0) - aCharCodeAt]++;
  }

  // 遍历字符串s，将窗口中的字符频率依次和p的字符频率进行对比
  const pLength:number = p.length;
  const slength:number = s.length;
  for(let i=0; i<slength; i++) {
      // 更新当前窗口的字符串频率
      sCount[s[i].charCodeAt(0) - aCharCodeAt]++;

      // 窗口大小超过p，则移除左边的字符
      if(i >= pLength) {
          sCount[s[i-pLength].charCodeAt(0) - aCharCodeAt]--;
      }

      // 检查当前窗口是否是p的异位词
      if(sCount.join('') === pCount.join('')) {
          res.push(i - pLength + 1);
      }
  }
  return res;
};