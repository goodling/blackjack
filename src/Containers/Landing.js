import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Landing from '../Components/Landing';
import { addNumber, subtractNumber } from '../Actions/Number.js';
import { levelUp } from '../Actions/Level'

function mapStateToProps (state) {
  // console.log('state: ', state);
  return {
    number: state.number.value,
    level: state.levelReducer.level
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    addNumber,
    subtractNumber,
    levelUp
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
