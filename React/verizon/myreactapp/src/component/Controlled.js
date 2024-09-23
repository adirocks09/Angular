import React, { Component } from 'react';

class Controlled extends React.Component {

  constructor() {
    super();
    this.state = {
      textValue: "",
      radioValue: false
    }
    this.changeText = this.changeText.bind(this);
    this.changeRadio = this.changeRadio.bind(this);
    this.submitC = this.submitC.bind(this);
  }

  changeText(evt) {
    console.log(this.state.textValue);
    this.setState({
      textValue: evt.target.value,
    });
  }

  changeRadio(evt) {
    this.setState({
      radioValue: evt.target.value
    });
  }

  submitC(evt) {
    evt.preventDefault();
    console.log(this.state.textValue);
    console.log(this.state.radioValue);
  }


  render() {
    const jsx = <form>
      <div>
        <input type="text" value={this.state.textValue} onChange={this.changeText} />
      </div>
      <div>
        <input type="radio" value={this.state.radioValue} onChange={this.changeRadio} />
      </div>
      <div>
        <input type="button" value="Submit" onClick={this.submitC} />
      </div>
    </form>

    return jsx;
  }
}



export default Controlled;
