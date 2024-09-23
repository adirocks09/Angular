import { connect } from "react-redux"
import Form2 from "../component/Form2"
import { incrementAction, decrementAction } from "../actions/counterAction.js";

function mapStateToProps(state, ownProps) {

}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    incrementHandler: () => {
      dispatch(incrementAction());
    },
    decrementHandler: () => {
      dispatch(decrementAction());
    }
  }
}
const FormContainer = connect(mapStateToProps, mapDispatchToProps)(Form2);
export default FormContainer;
