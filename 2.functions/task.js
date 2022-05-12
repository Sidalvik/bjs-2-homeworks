// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  if (!(arr.length > 0)) {
    return;
  }

  min = max = sum = +arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (min > +arr[i]) {
      min = +arr[i];
    }

    if (max < +arr[i]) {
      max = +arr[i];
    }

    sum += +arr[i];
  }

  avg = +(sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum;

  if (!(arr.length > 0)) {
    return;
  }

  sum = +arr[0];
  for (let i = 1; i < arr.length; i++){
    sum += +arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  if (!(arrOfArr.length > 0)) {
    return;
  }
  
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

  if (!(arr.length > 0)) {
    return;
  }

  min = max = +arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (min > +arr[i]) {
      min = +arr[i];
    }

    if (max < +arr[i]) {
      max = +arr[i];
    }
  }

  return max - min;
}