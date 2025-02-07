// https://leetcode.cn/problems/group-anagrams/description/?envType=study-plan-v2&envId=top-100-liked



// 方法1：排序+哈希表  ---  时间复杂度O(nklogk)  ---  空间复杂度：o(nk)
let groupAnagrams = function (strs: string[]) {
  let map = new Map();
  for (let str of strs) {
    let arr = Array.from(str);
    arr.sort();
    let key = arr.join('');
    let list = map.get(key) ? map.get(key) : [];
    list.push(str);
    map.set(key, list);
  }
  return Array.from(map.values());
}