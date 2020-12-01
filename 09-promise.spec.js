const Promise = require("./09-promise.js");

it("基本功能", (done) => {
  let promise
  
  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success");
    }, 50);
  });

  promise.then((data) => {
    expect(data).toBe("success");
  });

  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("failure");
    }, 50);
  });

  promise.then(
    (data) => {
      console.log("resolve data: ", data);
    },
    (error) => {
      expect(error).toBe("failure");
    }
  );

  // 链式调用
  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success");
    }, 50);
  });

  promise.then().then().then(data => {
    expect(data).toBe("success");
    done()
  })
});
