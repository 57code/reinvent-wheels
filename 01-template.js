module.exports = {
  compile(template) {
    // 转换template
    // 希望输出：<b>${key}</b>
    template = template.replace(/\{\{(.+)\}\}/g, function() {
      let key = arguments[1].trim()
      return '${' + key + '}'
    })

    // 希望的输出：let str = ''; with(obj) { str += `${key}` }; return str;
    const body = "let str = ''; with(obj) { str += `" + template + "`} return str"
    console.log(body);

    // 返回我们的generate函数
    return new Function('obj', body)
  }
}