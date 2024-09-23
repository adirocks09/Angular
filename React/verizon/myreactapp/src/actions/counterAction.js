export function incrementAction() {
  console.log("Incrementing");
  return ({ type: "INCREMENT" });
}

export function decrementAction() {
  console.log("Decrementing");
  return ({ type: "DECREMENT" });
}