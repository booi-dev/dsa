// sort in ascending order

const arr = [-6, 20, 8, -2, 4];

const quickSort = (arr) => {
  // base case
  if (arr.length <= 1) return arr;
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log(quickSort(arr));

// worst case : o(n^2) - Quadratic
// best case : o(n log n) - Linearithmic
