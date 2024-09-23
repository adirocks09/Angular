export default function counterReducer(prevState = { counter: 0 }, action) {
  let newState;
  switch (action.type) {
    case "INCREMENT":
      newState = { ...prevState, counter: prevState.counter + 1 };
      break;

    case "DECREMENT":
      newState = { ...prevState, counter: prevState.counter - 1 };
      break;

    default:
      newState = { ...prevState };
  }
  console.log("prevState" + prevState)
  console.log("counter" + newState)
  console.log("newState" + newState)
  return newState;
}

