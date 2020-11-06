module.exports = {
  throttle(fn, delay) {
    // 记录上次触发事件
    let last = 0
    // 返回带节流功能的函数
    return (...args) => {
      // 获取当前事件
      const now = + Date.now()
      // 两次执行间隔如果超过delay则可以调用fn
      if (now - last > delay) {
        last = now
        fn.apply(this, args)
      }
    }
  }
}