import React from "react";
import Form from "./Form"
import Display from "./Display"

class CounterTwo extends React.Component {
  constructor() {
    super();
    this.state = { counter: 0 };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);

    //binding is required when calling function using child component
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
    const sClass = {
      fontSize: 50,
      color: "Red",
      fontFamily: "Arial",
      padding: "5px"
    }

    return (
      <div>
        <h1 style={sClass} color="red">Counter Two</h1>
        <Form
          incHandler={this.increment}
          decHandler={this.decrement}
          reset={this.reset}>
        </Form>
        <Display value={this.state.counter}></Display>
      </div>
    );
  }
}

export default CounterTwo;