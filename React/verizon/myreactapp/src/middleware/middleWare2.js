export default function middleWare2(store) {
  return function (next) {
    return function (action) {
      console.log("MiddleWare2 Called");
      console.log("Before Action MiddleWare2 store ", store.getState());
      console.log("Before Action MiddleWare2 action ", action);
      next(action);
      console.log("After Action MiddleWare2 store ", store.getState());
      console.log("After Action MiddleWare2 action ", action);
    }
  }
}