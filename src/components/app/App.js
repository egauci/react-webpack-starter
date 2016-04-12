import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

export default class extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element)
    ]),
    config: PropTypes.object.isRequired,
    numberfactActive: PropTypes.bool,
    viewportActive: PropTypes.bool
  }
  render() {
    const {config, viewportActive, numberfactActive, children} = this.props;
    const {viewportPath, numberfactPath} = config.toObject();
    const viewportClass = viewportActive ? 'active' : 'inactive';
    const numberfactClass = numberfactActive ? 'active' : 'inactive';
    return (
      <div>
        <h1>Welcome</h1>
        <nav>
          <Link className={viewportClass} to={viewportPath}>Show Viewport Values</Link>
          <Link className={numberfactClass} to={numberfactPath}>Show a Number Fact</Link>
        </nav>
        {children}
      </div>
    );
  }
}
