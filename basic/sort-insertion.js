const arr = [-6, 20, 8, -2, 4];

const insertionSort = () => {
  for (let i = 1; i < arr.length; i++) {
    let numToInsert = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > numToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numToInsert;
  }
};

insertionSort(arr);
console.log(arr);

// logic - move greator to the right
