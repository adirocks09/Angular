import React from "react";
import Form2 from "./Form2"
import Display2 from "./Display2"
import DisplayContainer from "../container/DisplayContainer"
import FormContainer from "../container/FormContainer"

class Counter3 extends React.Component {

  render() {
    return (
      <div><h1 >Redux Counter</h1>
        <FormContainer></FormContainer>
        <DisplayContainer></DisplayContainer>
      </div>
    );
  }

  /*
    render() {
      return (
        <div><h1 >Redux Counter</h1>
          <Form2></Form2>
          <Display2></Display2>
        </div>
      );
    }
    */
}

export default Counter3;