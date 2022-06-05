'use strict'

// Task 1
function cachingDecoratorNew(func) {
  let cache = [];

  return function (...args) {
    const hash = args.join(',');
    const index = cache.findIndex((item, idx) => item.hash === hash);
      if (index !== -1) {
          // console.log('Из кэша: ' + cache[index].value);
          return "Из кэша: " + cache[index].value;
      }
      const value = func(...args);
      // console.log('Вычисляем: ' + value);
      cache.push({hash, value});
      if (cache.length > 5) {
          cache.shift();
      }
      return "Вычисляем: " + value;
  }
}


// Task 2
function debounceDecoratorNew(func, ms) {
  let timeout;
  let newStart = true;

  return function (...args) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      func.apply(this, args);
      newStart = true;
    }, ms);

    if (newStart) {
      func.apply(this, args);
      newStart = false;
    }
  }
}


// Task 3
function debounceDecorator2(func, ms) {
  let timeout;
  let newStart = true;

  function wrapper(...args) {
    wrapper.count++;

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      func.apply(this, args);
      newStart = true;
    }, ms);

    if (newStart) {
      newStart = false;
      func.apply(this, args);
    }
  }

  wrapper.count = 0;
  return wrapper;
}
