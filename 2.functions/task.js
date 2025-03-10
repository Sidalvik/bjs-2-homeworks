'use strict'

// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  min = max = sum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }

    if (max < arr[i]) {
      max = arr[i];
    }

    sum += arr[i];
  }

  avg = +(sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum;

  sum = arr[0];
  for (let i = 1; i < arr.length; i++){
    sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  max = func(arrOfArr[0]);

  for (let i = 1; i < arrOfArr.length; i++) {
    let resultFunc = func(arrOfArr[i]);
    if (max < resultFunc) {
      max = resultFunc;
    }
  }

  return max;
}

// Задание 3
function worker2(arr) {
  let min, max;

  min = max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }

    if (max < arr[i]) {
      max = arr[i];
    }
  }

  return max - min;
}