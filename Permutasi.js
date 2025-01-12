function generatePermutations(array) {
  const result = [];

  function backtrack(permutation, used) {
    if (permutation.length === array.length) {
      result.push([...permutation]);
      return;
    }
    for (let i = 0; i < array.length; i++) {
      if (used[i]) continue;
      used[i] = true;
      permutation.push(array[i]);
      backtrack(permutation, used);

      used[i] = false;
      permutation.pop();
    }
  }

  backtrack([], Array(array.length).fill(false));
  return result;
}

const array = [1, 2, 3];
console.log(generatePermutations(array));
