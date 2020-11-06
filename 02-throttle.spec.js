const { throttle } = require("./02-throttle");
it("节流Throttle", (done) => {

  // 定义一个Mock函数
  let mockFn = jest.fn();

  // 封装为节流方法
  let fn = throttle(mockFn, 100);

  // 同步调用多次
  fn(1);
  fn(2);
  fn(3);

  // 希望mockFn只调用一次
  expect(mockFn.mock.calls.length).toBe(1);


  mockFn = jest.fn();
  fn = throttle(mockFn, 100);
  // 先调一次，超过100毫秒阈值再调一次 
  fn(1)
  setTimeout(() => {
    fn(2)
    // 希望mockFn调了两次
    expect(mockFn.mock.calls.length).toBe(2);
    done()
  }, 150);
});