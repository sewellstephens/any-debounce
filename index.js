
//debounce function for debouncing a function
const debounce = (callback, wait) => {
    let timeoutId = null;
    return (...args) => {
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        callback.apply(null, args);
      }, wait);
    };
}

const debouncer = (callback, wait) => {
    return debounce(callback, wait);
}

//debounce function for debouncing a value
const debounceValue = (value, wait) => {
  let timeoutId = null;
    return () => {
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        return value;
      }, wait);
    };
};

const useDebounce = (value, wait) => {
    return debounceValue(value, wait);
}

export { debouncer, useDebounce };