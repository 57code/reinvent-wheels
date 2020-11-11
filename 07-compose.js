module.exports.compose = middleware => {
  return function () {
    function dispatch(i) {
      const fn = middleware[i]
      // fn不存在时表示已处理完所有中间件
      if (!fn) {
        return 
      }
      // 下面利用递归，执行第一个中间件时传入next包含了后续中间件next前面的部分
      // 最后的效果是所有中间件next前面部分先执行，后面后执行，形成洋葱圈效果
      return fn(function next() {
        // 执行下一个中间件
        return dispatch(i + 1)
      })
    }

    // 启动执行
    return dispatch(0)
  }
}