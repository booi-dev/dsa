// sort the arr in ascending order

const arr = [-6, 20, 8, -2, 4];

const merge = (leftArr, rightArr) => {
  const sorted = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      sorted.push(leftArr.shift());
    } else {
      sorted.push(rightArr.shift());
    }
  }
  return [...sorted, ...leftArr, ...rightArr];
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

console.log(mergeSort(arr)); // [-6, -2, 4, 8, 20]

// worst case : o(n log n) - Linearithmic
// best case : o(n log n) - Linearithmic
