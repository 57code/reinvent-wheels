const {compile} = require('./01-template')
it("{{}} 表达式", () => {
  const output = compile("<b>{{ name }}</b>")({ name: "tom" });
  expect(output).toBe(`<b>tom</b>`);
});