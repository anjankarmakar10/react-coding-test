const debounce = (fun, delay) => {
  let time;
  return (...args) => {
    let self = this;
    if (time) clearTimeout(time);
    time = setTimeout(() => {
      fun.apply(self, args);
    }, delay * 1000);
  };
};

export default debounce;
