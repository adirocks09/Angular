import React, { Component } from 'react';



class Hello extends React.Component {
  render() {
    console.log(this)
    console.log(this.props);

    const sClass = {
      fontSize: 10,
      color: "blue",
      fontFamily: "Arial",
      padding: "5px"
    }

    const dClass = {
      fontSize: 10,
      color: "black",
      fontFamily: "Arial",
      padding: "5px"
    }

    return <div style={sClass}><h1>{this.props.greet}{this.props.name}
      <p style={dClass}>{this.props.children}</p></h1>
    </div>
  }
}

Hello.defaultProps = {
  greet: "Hello",
  name: "World!"
}

export default Hello;
