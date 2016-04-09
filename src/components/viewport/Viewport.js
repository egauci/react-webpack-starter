/* eslint no-invalid-this: 0 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import lcss from './Viewport.css';

class Viewport extends Component {
  static propTypes = {
    winsize: PropTypes.object.isRequired
  }
  shouldComponentUpdate(nextProps) {
    const upd = this.props.winsize !== nextProps.winsize;
    return upd;
  }
  render() {
    return (
      <div>
        <h2>Viewport Values</h2>
        <div>
          {this.props.winsize.map((v, k) => <p key={k}><span className={lcss.label}>{k}:</span> {v}</p>)}
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

export default connect(mapStateToProps)(Viewport);
