import React from "react";

class SampleState extends React.Component {
  constructor() {
    super();
    this.state = {
      time: (new Date()).toLocaleTimeString(),
      clock: "My clock",
    }
    //console.log("constructor() called");

  }

  render() {
    //console.log("render() called");
    return <div> <h1> Welcome to Clock </h1> <br />
      <b> {this.state.time} </b> <br />
      <b>{this.state.clock} </b>
    </div>;
  }
  // first constructor is called and then render() is called and then componentDidMount() is called and then render is called everytime the state of the class changes

  componentDidMount() {

    setInterval(() => {
      const currentTime = (new Date()).toLocaleTimeString();
      this.setState({  /*Whenever the state is changed ..render method is called and after every render () call componentDidMount() is called*/
        time: currentTime,
        clock: "Dynamic clock",
      })
      //console.log("componentDidMount() called");
    }, 1000)

  }

}
export default SampleState;