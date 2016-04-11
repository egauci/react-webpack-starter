import {connect} from 'react-redux';
import App from './container';

const mapStateToProps = (state) => ({config: state.get('config')});
export default connect(mapStateToProps)(App);
