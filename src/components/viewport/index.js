import {connect} from 'react-redux';
import Viewport from './Viewport';

function mapStateToProps(state) {
  return {
    winsize: state.get('winsize')
  };
}

export default connect(mapStateToProps)(Viewport);
