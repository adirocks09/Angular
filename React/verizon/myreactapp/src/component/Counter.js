import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = { counter: 0 };

    //binding is done in constructor

    this.increment = this.increment.bind(this);
    //this.decrement = this.decrement.bind(this); 

    // binding is not required as we are using arrow function in line no. 30 so it takes care of binding to this

    this.reset = this.reset.bind(this);
  }

  increment() {
    this.setState((preState) => ({ counter: preState.counter + 1 }))
  }

  decrement() {
    this.setState((preState) => ({ counter: preState.counter - 1 }))
  }

  reset() {
    this.setState((preState) => ({ counter: 0 }))
  }

  render() {
    return (
      <div>
        <h1>Do Increment or Decrement</h1>
        <input type="button" value="increment" onClick={this.increment} />
        <input type="button" value="decrement" onClick={() => this.decrement()} />
        <input type="button" value="reset" onClick={this.reset} /><br />
        {this.state.counter}
      </div>
    );
  }
}

export default Counter;