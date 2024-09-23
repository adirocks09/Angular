import React from "react";
import PropTypes from "prop-types"


export default function Display(props) {

  const jsx = <div><h1>{props.value}</h1></div>

  return jsx;
}

Display.propTypes = {
  value: PropTypes.number
}