// PROBLEM STATEMENT: Given a sorted array of integers, return the index of target element 't'.
//Return -1 if not found.

// iterative approach
const binarySearch = (arr, t) => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let midIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (arr[midIndex] === t) return midIndex;

    if (arr[midIndex] < t) leftIndex = midIndex + 1;
    else rightIndex = midIndex - 1;
  }
  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)); // 4
console.log(binarySearch([-5, 2, 4, 6, 10], 6)); // 3
console.log(binarySearch([-5, 2, 4, 6, 10], 20)); // -1

// Big-O: O(log n)

// recursive approach

const binarySearchRecHelper = (arr, t, leftIndex, rightIndex) => {
  if (leftIndex > rightIndex) return -1;

  let midIndex = Math.floor((leftIndex + rightIndex) / 2);

  if (arr[midIndex] === t) return midIndex;

  if (arr[midIndex] < t) {
    return binarySearchRecHelper(arr, t, midIndex + 1, rightIndex);
  } else {
    return binarySearchRecHelper(arr, t, leftIndex, midIndex - 1);
  }
};

const binarySearchRec = (arr, t) => {
  return binarySearchRecHelper(arr, t, 0, arr.length - 1);
};

console.log(binarySearchRec([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)); // 4
console.log(binarySearchRec([-5, 2, 4, 6, 10], 6)); // 3
console.log(binarySearchRec([-5, 2, 4, 6, 10], 20)); // -1
