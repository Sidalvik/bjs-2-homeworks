'use strict'

// Task 1
function cachingDecoratorNew(func) {
  let cache = [];

  return function (...args) {
    const hash = args.join(',');
    const index = cache.findIndex((item, idx) => item.hash === hash);
      if (index === -1) {
        const value = func(...args);
        // console.log('Вычисляем: ' + value);
        cache.push({hash, value});
        if (cache.length > 5) {
            cache.shift();
        }
        return "Вычисляем: " + value;
      } else {
          // console.log('Из кэша: ' + cache[index].value);
          return "Из кэша: " + cache[index].value;
      }
  }
}


// Task 2
function debounceDecoratorNew(func, ms) {
  let isDelayed = false;

  return function (...args) {
    if (!isDelayed) {
      isDelayed = true;
      setTimeout(() => isDelayed = false, ms);
      return func(...args);
    }
  }
}


// Task 3
function debounceDecorator2(func, ms) {
  let isDelayed = false;

  function wrapper (...args) {
    wrapper.count++;

    if (!isDelayed) {
      isDelayed = true;
      setTimeout(() => isDelayed = false, ms);
      return func(...args);
    }
  }

  wrapper.count = 0;
  return wrapper;
}
