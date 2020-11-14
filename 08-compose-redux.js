module.exports.compose = (middlewares) => {
  // 中间件如果为空
  if (middlewares.length === 0) {
    // 返回一个函数接收什么返回什么
    return (arg) => arg
  }

  // 下面是真正的复合函数
  return function() {
    // 希望的结果：
    // [a,b] => a(b())
    // 这里对middlewares做聚合，将若干函数数组变成一个函数
    // 每个函数的参数将是右侧函数的执行结果
    const fn = middlewares.reduce((a,b) => (arg) => a(() => b(arg)))
    // 首次执行传个空函数
    return fn(() => {})
  }
}