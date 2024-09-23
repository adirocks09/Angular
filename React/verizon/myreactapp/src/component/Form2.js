import React from "react";
import { incrementAction, decrementAction } from "../actions/counterAction.js";
import { connect } from "react-redux";

//class Form2 extends React.Component {
export default class Form2 extends React.Component {

  constructor() {
    super();
    //this.incrementHandler = this.incrementHandler.bind(this);
    //this.decrementHandler = this.decrementHandler.bind(this);
  }

  render() {
    const jsx = <div>
      <input type="button" value="increment" onClick={this.props.incrementHandler} />
      <input type="button" value="decrement" onClick={this.props.decrementHandler} />

    </div>

    return jsx;
  }

  /*
  render() {
    const jsx = <div>
      <input type="button" value="increment" onClick={this.incrementHandler} />
      <input type="button" value="decrement" onClick={this.decrementHandler} />

    </div>

    return jsx;
  }

  
    incrementHandler() {
      this.props.dispatch(incrementAction());
    }
  
    decrementHandler() {
      this.props.dispatch(decrementAction());
    }
  
  */
}

//const FormContainer = connect()(Form2);
//export default FormContainer;