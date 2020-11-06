const { debounce } = require("./03-debounce");
it("防抖Debounce", (done) => {
  const mockFn = jest.fn();
  // 封装一个防抖函数
  const fn = debounce(mockFn, 100);

  // 两次调用之间间隔不超过100毫秒
  fn(1);
  setTimeout(() => {
    fn(2);
    // 期待函数不被调用
    expect(mockFn.mock.calls.length).toBe(0)
  }, 50);
  
  // 等待超过150ms之后，期待函数被调用
  setTimeout(() => {
    expect(mockFn.mock.calls.length).toBe(1)
    done()
  }, 200);

});