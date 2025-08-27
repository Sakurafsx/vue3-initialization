// 给你一个由 无重复 正整数组成的集合 nums ，请你找出并返回其中最大的整除子集 answer ，子集中每一元素对 (answer[i], answer[j]) 都应当满足：
// answer[i] % answer[j] == 0 ，或
// answer[j] % answer[i] == 0
// 如果存在多个有效解子集，返回其中任何一个均可

function largestDivisibleSubset(nums) {
  if (!nums.length) return [];
  nums.sort((a, b) => a - b);
  const dp = Array(nums.length).fill(1);
  const prev = Array(nums.length).fill(-1);
  let maxIdx = 0;

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] % nums[j] === 0 && dp[j] + 1 > dp[i]) {
        dp[i] = dp[j] + 1;
        prev[i] = j;
      }
    }
    if (dp[i] > dp[maxIdx]) maxIdx = i;
  }

  const res = [];
  let k = maxIdx;
  while (k !== -1) {
    res.push(nums[k]);
    k = prev[k];
  }
  return res.reverse();
}
const arr = [1, 2, 4, 8];
console.log(largestDivisibleSubset(arr)); // [1,2,4,8]
