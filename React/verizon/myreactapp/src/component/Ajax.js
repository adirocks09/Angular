import React, { Component } from 'react';
import { axios } from "axios"
class Ajax extends React.Component {

  constructor() {
    super();
    this.state = {
      textValue: "https://api.github.com/users/gaearon",
      error: "",
      user: "",
      message: ""
    }

    this.submitC = this.submitC.bind(this);
  }

  submitC() {

    console.log(this.state.textValue);
    axios.get('http://api.github.com/users/gaearon')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  render() {
    const jsx = <form>
      <div>
        <input type="text" value={this.state.textValue} />
      </div>
      <div>
        <input type="button" value="Submit" onClick={this.submitC} />
      </div>
      {this.state.message}
    </form>
    return jsx;
  }
}



export default Ajax;
