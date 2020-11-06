module.exports.debounce = (fn, delay) => {
  let timer;
  // 返回包装的debounce函数
  return (...args) => {
    // 用户调用会重置定时器
    if (timer) {
      clearTimeout(timer);
    }

    // fn只能有定时器调用
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};
