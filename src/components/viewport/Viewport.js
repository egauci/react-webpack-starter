import React, {Component, PropTypes} from 'react';
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
    // mapping over an Immutable.map produces an object. React prefers
    // arrays of children, so convert the map to a list first.
    const list = this.props.winsize.reduce(
      (r, v, k) => [...r, [k, v]],
      []
    );
    return (
      <div>
        {list.map(itm => <p key={itm[0]}><span className={lcss.label}>{itm[0]}:</span> {itm[1]}</p>)}
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
