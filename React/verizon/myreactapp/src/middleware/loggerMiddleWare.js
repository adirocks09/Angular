export default function loggerMiddleWare(store) {
  return function (next) {
    return function (action) {
      console.log("MiddleWare1 Called");
      console.log("Before Action MiddleWare1 store ", store.getState());
      console.log("Before Action MiddleWare1 action ", action);
      next(action);
      console.log("After Action MiddleWare1 store ", store.getState());
      console.log("After Action MiddleWare1 action ", action);
    }
  }
}