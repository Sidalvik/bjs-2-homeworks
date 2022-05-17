'use strict'
//Task 1
function compareArrays(arr1, arr2) {

  if (arr1.length !== arr2.length) {
    return false;
  }

  let result = arr1.every((item, idx) => item === arr2[idx]);

  return result; // boolean
}

// Task 2
function advancedFilter(arr) {

  let resultArr = arr.filter((item) => (item > 0) & (item % 3 === 0)).map((item) => item * 10);

  return resultArr; // array
}