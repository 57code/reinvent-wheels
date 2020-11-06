let effective

function effect(fun) {
  effective = fun
}

function reactive(data) {
  // 响应式的data应该是对象
  if (typeof data !== 'object' || data === null) {
    return data
  }
  
  Object.keys(data).forEach(key => {
    let value = data[key]

    Object.defineProperty(data, key, {
      get() {
        return value
      },
      set(v) {
        if (v !== value) {
          // 防止对象嵌套
          reactive(data)
          effective()
          value = v
        }
      }
    })
  })

  return data
}

module.exports = {
  effect, reactive
}