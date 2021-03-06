import React, {Component} from 'react';
import PropTypes from 'prop-types';
import lcss from './Viewport.css';

class Viewport extends Component {
  static propTypes = {
    winsize: PropTypes.object.isRequired
  }
  shouldComponentUpdate(nextProps) {
    const upd = this.props.winsize !== nextProps.winsize;
    return upd;
  }
  getItems() {
    // mapping over an Immutable.Map produces an object. React prefers
    // children as an array, so convert the map to an array first.
    const list = this.props.winsize.reduce(
      (r, v, k) => [...r, [k, v]],
      []
    );
    return (
      <div>
        {list
          .filter(itm => itm[0] !== 'isIOS')
          .map(itm => <p key={itm[0]}><span className={lcss.label}>{itm[0]}:</span> {itm[1]}</p>)}
      </div>
    );
  }
  render() {
    return (
      <div>
        <h2>Viewport Values</h2>
        {this.getItems()}
      </div>
    );
  }
}

export default Viewport;
