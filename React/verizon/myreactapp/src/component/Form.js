import React from "react";
import PropTypes from "prop-types"


export default function Form(props) {

  const jsx = <div>
    <input type="button" value="increment" onClick={props.incHandler} />
    <input type="button" value="decrement" onClick={props.decHandler} />
    <input type="button" value="reset" onClick={props.reset} /><br />
  </div>

  return jsx;
}

Form.propTypes = {
  incHandler: PropTypes.func,
  decHandler: PropTypes.func
}