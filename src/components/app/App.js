import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class App extends Component {
  render() {
    const {config, viewportActive, numberfactActive, children} = this.props;
    const {viewportPath, numberfactPath} = config.toObject();
    const viewportClass = viewportActive ? 'active' : 'inactive';
    const numberfactClass = numberfactActive ? 'active' : 'inactive';
    return (
      <div>
        <h1>Welcome</h1>
        <div>
          <nav>
            <Link className={viewportClass} to={viewportPath}>Show Viewport Values</Link>
            <Link className={numberfactClass} to={numberfactPath}>Show a Number Fact</Link>
          </nav>
          {children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
  config: PropTypes.object.isRequired,
  numberfactActive: PropTypes.bool,
  viewportActive: PropTypes.bool
};

export default App;
