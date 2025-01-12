function findSubsetSums(array, target) {
  const result = [];

  function backtrack(start, subset, currentSum) {
    if (currentSum === target) {
      result.push([...subset]);
      return;
    }
    if (currentSum > target) return;
    for (let i = start; i < array.length; i++) {
      subset.push(array[i]);
      backtrack(i, subset, currentSum + array[i]);
      subset.pop();
    }
  }

  backtrack(0, [], 0);
  return result;
}
const array = [2, 4, 6, 8];
const target = 10;

console.log(findSubsetSums(array, target));
