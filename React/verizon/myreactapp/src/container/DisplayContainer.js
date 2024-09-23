
import { connect } from "react-redux"
import Display2 from "../component/Display2"

function mapStateToProps(state, ownProps) {
  console.log("ownProps :", ownProps);
  return {
    value: state.counter
  };
}

const DisplayContainer = connect(mapStateToProps)(Display2);

export default DisplayContainer;