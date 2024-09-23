import React, { Component } from 'react';



class Destr extends React.Component {
  render() {

    let { myColors } = this.props;  //De-structurisation
    // let myColors = this.props.myColors;  //Without De-structurisation

    console.log("colors  are " + myColors);

    let jsx = [];

    for (let index = 0; index < myColors.length; index++) {

      const element = myColors[index];
      console.log("element is " + element);

      jsx.push(
        <li key={Math.random()}>{element}</li>
        //<li key={index}>{element}</li>
      )
    }
    return (<div > <ul>{jsx}</ul>
    </div>);
  }
}



export default Destr;
