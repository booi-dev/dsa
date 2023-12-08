// given an array of integers, sort the array in ascending order

const arr = [-6, 20, 8, -2, 4];

const bubbleSort = (arr) => {
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
};

bubbleSort(arr);
console.log(arr);

// bubble sort is shit. you will hardly use it.
