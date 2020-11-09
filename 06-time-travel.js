module.exports = createHistory = () => {
  // 时间线
  const timeline = {
    past: [], // 过去的记录
    present: null, // 当前状态
    future: [], // 未来的状态
  };

  // 实现一个可以在时间线上任意跳转的方法
  timeline.gotoState = (index) => {
    // 获取全部状态数据
    const allState = [...timeline.past, timeline.present, ...timeline.future];
    timeline.present = allState[index]
    timeline.past = allState.slice(0, index)
    timeline.future = allState.slice(index + 1)
  };

  // 实现一个push方法可以添加一个新状态
  timeline.push = currentState => {
    // 如果当前状态存在，则直接将传入状态放入past
    if (timeline.present) {
      timeline.past.push(timeline.present)
    }

    // 替换当前状态为最新的
    timeline.present = currentState
  }

  // 最后实现一个undo方法，可以跳转至上一个状态
  timeline.undo = () => {
    // 如果存在上个状态
    if (timeline.past.length !== 0) {
      timeline.gotoState(timeline.past.length - 1)
    }
  }

  return timeline
};
