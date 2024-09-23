import React from "react";
import { connect } from "react-redux";

//class Display2 extends React.Component {
export default class Display2 extends React.Component {
  render() {
    console.log("Display props  ", this.props);
    return <h1>{this.props.value}</h1>;
  }


}

/*
function mapStateToProps(state, ownProps) {
  console.log("ownProps :", ownProps);
  return {
    value: state.counter
  };
}

const DisplayContainer = connect(mapStateToProps)(Display2);

export default DisplayContainer;
*/

