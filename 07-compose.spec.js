const {compose} = require('./08-compose-redux')

describe("koa中间件实现", () => {
  it("同步实现", async () => {
    const mockFn = jest.fn();

    const middlewares = [
      (next) => {
        mockFn("1 start");
        next();
        mockFn("1 end");
      },
      (next) => {
        mockFn("2 start");
        next();
        mockFn("2 end");
      },
    ];
    const func = compose(middlewares);
    func();
    const calls = mockFn.mock.calls;

    expect(calls.length).toBe(4);
    expect(calls[0][0]).toBe("1 start");
    expect(calls[1][0]).toBe("2 start");
    expect(calls[2][0]).toBe("2 end");
    expect(calls[3][0]).toBe("1 end");
  });
});
