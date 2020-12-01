class Promise {
  constructor(executor) {
    this.status = "pending";
    this.value = undefined;
    this.reason = undefined;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.status === "pending") {
        this.status = "fulfilled";
        this.value = value;
        this.onResolvedCallbacks.forEach((fn) => fn());
      }
    };

    const reject = (reason) => {
      if (this.status === "pending") {
        this.status = "rejected";
        this.reason = reason;
        this.onRejectedCallbacks.forEach((fn) => fn());
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFullilled, onRejected) {
    // 解决onFulfilled, onRejected没有传值的问题
    onFulfilled = onFullfilled ? onFulfilled : (val) => val;
    onRejected = onRejected
      ? onRejected
      : (err) => {
          throw err;
        };

    const promise = new Promise((resolve, reject) => {
      
    });
    if (this.status === "fulfilled") {
      onFullilled(this.value);
      
    } else if (this.status === "rejected") {
      onRejected(this.reason);
    } else if (this.status === "pending") {
      this.onResolvedCallbacks.push(() => {
        const result = onFullilled(this.value);
        
      });
      this.onRejectedCallbacks.push(() => {
        onRejected(this.reason);
      });
    }
  }
}

module.exports = Promise;
