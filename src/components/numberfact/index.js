import {connect} from 'react-redux';
import {getFact, clearFact} from '../../actions';
import Numberfact from './Numberfact';

function mapStateToProps(state) {
  return {
    fact: state.get('fact')
  };
}

export default connect(mapStateToProps, {getFact, clearFact})(Numberfact);
