/* eslint no-invalid-this: 0 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class App extends Component {
  static propTypes = {
    winsize: PropTypes.object.isRequired
  }
  shouldComponentUpdate(nextProps) {
    const upd = this.props.winsize !== nextProps.winsize;
    console.log(`Shouldupdate: ${upd}`);
    return upd;
  }
  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <div>
          {this.props.winsize.map((v, k) => <p key={k}>{k}: {v}</p>)}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    winsize: state.get('winsize')
  };
}

export default connect(mapStateToProps)(App);
