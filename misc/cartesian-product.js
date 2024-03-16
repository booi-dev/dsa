// five two arrays and returns a new array with all possible combinations of the items in the arrays.

const cartesianProductJsWay = (a, b) =>
  a.reduce((p, x) => p.concat(b.map((y) => [x, y])), []);

const cartesianProducGeneralWay = (arr1, arr2) => {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push([arr1[i], arr2[j]]);
    }
  }

  return result;
};

const arr1 = [1, 2];
const arr2 = [3, 4, 5];

console.log(cartesianProductJsWay(arr1, arr2)); // [[1,3],[1,4],[2,3],[2,4]]
console.log(cartesianProducGeneralWay(arr1, arr2)); // [[1,3],[1,4],[2,3],[2,4]]

// worst case time complexity: O(nm)
// best case time complexity: O(nm)
